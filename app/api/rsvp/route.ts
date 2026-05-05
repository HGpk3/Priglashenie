import { NextResponse } from "next/server";

export const runtime = "nodejs";

type RsvpPayload = {
  name?: string;
  attendance?: string;
  alcohol?: string;
  meal?: string;
  allergies?: string;
  transfer?: string;
  website?: string;
};

type NormalizedRsvpPayload = {
  name: string;
  attendance: string;
  alcohol: string;
  meal: string;
  allergies: string;
  transfer: string;
  website: string;
};

const TELEGRAM_API_BASE = "https://api.telegram.org";
const MAX_FIELD_LENGTH = 500;
const SUBMISSION_WINDOW_MS = 60_000;
const SUBMISSION_LIMIT = 5;

const attendanceOptions = new Set(["Да", "Нет"]);
const alcoholOptions = new Set([
  "Шампанское",
  "Красное вино сладкое",
  "Красное вино сухое",
  "Белое вино сладкое",
  "Белое вино сухое",
  "Не буду пить"
]);
const mealOptions = new Set(["Рыба", "Мясо", "Без разницы"]);
const transferOptions = new Set(["Да", "Нет"]);
const submissionBuckets = new Map<string, number[]>();

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

function getEnv(name: string) {
  const value = process.env[name]?.trim();

  return value ? value : null;
}

function parseThreadId(value: string | undefined) {
  if (!value) {
    return null;
  }

  const parsedValue = Number.parseInt(value, 10);

  return Number.isFinite(parsedValue) ? parsedValue : null;
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
    return { ok: true as const, botSubmission: true };
  }

  if (!payload.name) {
    return { ok: false as const, error: "Укажите имя и фамилию." };
  }

  if (!payload.attendance || !payload.alcohol || !payload.meal || !payload.transfer) {
    return { ok: false as const, error: "Заполните обязательные поля анкеты." };
  }

  if (!attendanceOptions.has(payload.attendance)) {
    return { ok: false as const, error: "Выберите корректный вариант присутствия." };
  }

  if (!alcoholOptions.has(payload.alcohol)) {
    return { ok: false as const, error: "Выберите корректный вариант алкоголя." };
  }

  if (!mealOptions.has(payload.meal)) {
    return { ok: false as const, error: "Выберите корректный вариант блюда." };
  }

  if (!transferOptions.has(payload.transfer)) {
    return { ok: false as const, error: "Выберите корректный вариант трансфера." };
  }

  return { ok: true as const, botSubmission: false };
}

function buildTelegramMessage(payload: NormalizedRsvpPayload, source: string) {
  const submittedAt = new Date().toLocaleString("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Moscow"
  });

  const lines = [
    "Новая анкета RSVP",
    "",
    `Имя: ${payload.name}`,
    `Присутствие: ${payload.attendance}`,
    `Алкоголь: ${payload.alcohol}`,
    `Предпочтение по блюду: ${payload.meal}`,
    `Аллергии: ${payload.allergies || "Не указаны"}`,
    `Трансфер: ${payload.transfer}`,
    "",
    `Источник: ${source}`,
    `Отправлено: ${submittedAt} (МСК)`
  ];

  return lines.join("\n");
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

    const normalized: NormalizedRsvpPayload = {
      name: normalizeValue(payload.name),
      attendance: normalizeValue(payload.attendance),
      alcohol: normalizeValue(payload.alcohol),
      meal: normalizeValue(payload.meal),
      allergies: normalizeValue(payload.allergies),
      transfer: normalizeValue(payload.transfer),
      website: normalizeValue(payload.website)
    };

    const validation = validatePayload(normalized);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    if (validation.botSubmission) {
      return NextResponse.json({ ok: true });
    }

    const botToken = getEnv("TELEGRAM_BOT_TOKEN");
    const chatId = getEnv("TELEGRAM_CHAT_ID");

    if (!botToken || !chatId) {
      console.error("RSVP Telegram delivery is not configured.");

      return NextResponse.json(
        { error: "Анкета временно недоступна. Пожалуйста, сообщите нам удобным способом." },
        { status: 503 }
      );
    }

    const threadId = parseThreadId(process.env.TELEGRAM_THREAD_ID);
    const source = request.headers.get("origin") ?? request.headers.get("referer") ?? "Неизвестно";
    const messagePayload = {
      chat_id: chatId,
      text: buildTelegramMessage(normalized, source),
      disable_web_page_preview: true,
      ...(threadId ? { message_thread_id: threadId } : {})
    };

    const telegramResponse = await fetch(`${TELEGRAM_API_BASE}/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messagePayload),
      signal: AbortSignal.timeout(10_000)
    });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error("Telegram sendMessage failed:", errorText);

      return NextResponse.json(
        { error: "Не удалось отправить анкету. Попробуйте ещё раз чуть позже." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("RSVP submission failed:", error);

    return NextResponse.json(
      { error: "Сервис анкеты временно недоступен. Попробуйте ещё раз позже." },
      { status: 500 }
    );
  }
}
