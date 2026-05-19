import { randomUUID } from "node:crypto";
import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { rsvpOptions } from "@/data/rsvp-options";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RsvpPayload = {
  name?: string;
  attendance?: string;
  alcohol?: string | string[];
  meal?: string;
  allergies?: string;
  transfer?: string;
  website?: string;
};

type NormalizedRsvpPayload = {
  name: string;
  attendance: string;
  alcohol: string[];
  meal: string;
  allergies: string;
  transfer: string;
  website: string;
};

type StoredRsvpSubmission = Omit<NormalizedRsvpPayload, "website"> & {
  id: string;
  submittedAt: string;
  source: string;
};

const MAX_FIELD_LENGTH = 500;
const SUBMISSION_WINDOW_MS = 60_000;
const SUBMISSION_LIMIT = 5;
const DEFAULT_STORAGE_PATH = path.join(process.cwd(), ".data", "rsvp-submissions.jsonl");

const attendanceOptions = new Set<string>(rsvpOptions.attendance);
const alcoholOptions = new Set<string>(rsvpOptions.alcohol);
const mealOptions = new Set<string>(rsvpOptions.meal);
const transferOptions = new Set<string>(rsvpOptions.transfer);
const submissionBuckets = new Map<string, number[]>();

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

function normalizeStringList(value: unknown) {
  const values = Array.isArray(value) ? value : [value];

  return values.map(normalizeValue).filter(Boolean);
}

function getEnv(name: string) {
  const value = process.env[name]?.trim();

  return value ? value : null;
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && "code" in error;
}

function getStoragePath() {
  const configuredPath = getEnv("RSVP_STORAGE_PATH");

  if (!configuredPath) {
    return DEFAULT_STORAGE_PATH;
  }

  return path.isAbsolute(configuredPath) ? configuredPath : path.join(process.cwd(), configuredPath);
}

function getClientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function isRateLimited(request: Request) {
  const key = getClientKey(request);
  const now = Date.now();
  const bucket = (submissionBuckets.get(key) ?? []).filter((time) => now - time < SUBMISSION_WINDOW_MS);

  if (bucket.length >= SUBMISSION_LIMIT) {
    submissionBuckets.set(key, bucket);
    return true;
  }

  bucket.push(now);
  submissionBuckets.set(key, bucket);
  return false;
}

function validatePayload(payload: NormalizedRsvpPayload) {
  if (payload.website) {
    return { ok: true as const, spamSubmission: true };
  }

  if (!payload.name) {
    return { ok: false as const, error: "Укажите имя и фамилию." };
  }

  if (!payload.attendance || payload.alcohol.length === 0 || !payload.meal || !payload.transfer) {
    return { ok: false as const, error: "Заполните обязательные поля анкеты." };
  }

  if (!attendanceOptions.has(payload.attendance)) {
    return { ok: false as const, error: "Выберите корректный вариант присутствия." };
  }

  if (payload.alcohol.some((option) => !alcoholOptions.has(option))) {
    return { ok: false as const, error: "Выберите корректный вариант алкоголя." };
  }

  if (!mealOptions.has(payload.meal)) {
    return { ok: false as const, error: "Выберите корректный вариант блюда." };
  }

  if (!transferOptions.has(payload.transfer)) {
    return { ok: false as const, error: "Выберите корректный вариант трансфера." };
  }

  return { ok: true as const, spamSubmission: false };
}

function normalizeSubmission(payload: RsvpPayload): NormalizedRsvpPayload {
  return {
    name: normalizeValue(payload.name),
    attendance: normalizeValue(payload.attendance),
    alcohol: normalizeStringList(payload.alcohol),
    meal: normalizeValue(payload.meal),
    allergies: normalizeValue(payload.allergies),
    transfer: normalizeValue(payload.transfer),
    website: normalizeValue(payload.website)
  };
}

function buildStoredSubmission(payload: NormalizedRsvpPayload, request: Request): StoredRsvpSubmission {
  return {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    source: request.headers.get("origin") ?? request.headers.get("referer") ?? "Неизвестно",
    name: payload.name,
    attendance: payload.attendance,
    alcohol: payload.alcohol,
    meal: payload.meal,
    allergies: payload.allergies,
    transfer: payload.transfer
  };
}

async function saveSubmission(submission: StoredRsvpSubmission) {
  const storagePath = getStoragePath();

  await mkdir(path.dirname(storagePath), { recursive: true });
  await appendFile(storagePath, `${JSON.stringify(submission)}\n`, "utf8");
}

async function readSubmissions() {
  const storagePath = getStoragePath();

  try {
    const fileContent = await readFile(storagePath, "utf8");

    return fileContent
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const submission = JSON.parse(line) as StoredRsvpSubmission | (Omit<StoredRsvpSubmission, "alcohol"> & { alcohol: string });

        return {
          ...submission,
          alcohol: Array.isArray(submission.alcohol) ? submission.alcohol : [submission.alcohol].filter(Boolean)
        } as StoredRsvpSubmission;
      })
      .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
  } catch (error) {
    if (isNodeError(error) && error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

function countBy<T extends string>(items: StoredRsvpSubmission[], selector: (item: StoredRsvpSubmission) => T) {
  return items.reduce<Record<T, number>>((accumulator, item) => {
    const key = selector(item);
    accumulator[key] = (accumulator[key] ?? 0) + 1;

    return accumulator;
  }, {} as Record<T, number>);
}

function buildSummary(submissions: StoredRsvpSubmission[]) {
  return {
    total: submissions.length,
    attending: submissions.filter((submission) => submission.attendance === "Да").length,
    notAttending: submissions.filter((submission) => submission.attendance === "Нет").length,
    needsTransfer: submissions.filter((submission) => submission.transfer === "Да").length,
    alcohol: submissions.reduce<Record<string, number>>((accumulator, submission) => {
      submission.alcohol.forEach((option) => {
        accumulator[option] = (accumulator[option] ?? 0) + 1;
      });

      return accumulator;
    }, {}),
    meal: countBy(submissions, (submission) => submission.meal)
  };
}

export async function GET(request: Request) {
  const accessKey = getEnv("RSVP_RESULTS_KEY");
  const requestedKey = new URL(request.url).searchParams.get("key")?.trim();

  if (!accessKey) {
    return NextResponse.json({ error: "Просмотр ответов не настроен: задайте RSVP_RESULTS_KEY." }, { status: 503 });
  }

  if (!requestedKey || requestedKey !== accessKey) {
    return NextResponse.json({ error: "Неверный код доступа." }, { status: 401 });
  }

  try {
    const submissions = await readSubmissions();

    return NextResponse.json({
      ok: true,
      summary: buildSummary(submissions),
      submissions
    });
  } catch (error) {
    console.error("RSVP results read failed:", error);

    return NextResponse.json({ error: "Не удалось загрузить ответы." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(request)) {
      return NextResponse.json(
        { error: "Слишком много попыток подряд. Подождите минуту и попробуйте ещё раз." },
        { status: 429 }
      );
    }

    const payload = (await request.json().catch(() => null)) as RsvpPayload | null;

    if (!payload || typeof payload !== "object") {
      return NextResponse.json({ error: "Некорректные данные анкеты." }, { status: 400 });
    }

    const normalized = normalizeSubmission(payload);
    const validation = validatePayload(normalized);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    if (validation.spamSubmission) {
      return NextResponse.json({ ok: true });
    }

    await saveSubmission(buildStoredSubmission(normalized, request));

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("RSVP submission failed:", error);

    return NextResponse.json(
      { error: "Сервис анкеты временно недоступен. Попробуйте ещё раз позже." },
      { status: 500 }
    );
  }
}
