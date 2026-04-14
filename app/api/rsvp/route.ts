import { NextResponse } from "next/server";

export const runtime = "nodejs";

type RsvpPayload = {
  name?: string;
  attendance?: string;
  alcohol?: string;
  meal?: string;
  allergies?: string;
  transfer?: string;
};

const TELEGRAM_API_BASE = "https://api.telegram.org";

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function requireEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function parseThreadId(value: string | undefined) {
  if (!value) {
    return null;
  }

  const parsedValue = Number.parseInt(value, 10);

  return Number.isFinite(parsedValue) ? parsedValue : null;
}

function buildTelegramMessage(payload: Required<RsvpPayload>, source: string) {
  const lines = [
    "Новая анкета RSVP",
    "",
    `Имя: ${payload.name}`,
    `Присутствие: ${payload.attendance}`,
    `Алкоголь: ${payload.alcohol}`,
    `Предпочтение по блюду: ${payload.meal}`,
    `Аллергии: ${payload.allergies || "Не указаны"}`,
    `Трансфер: ${payload.transfer}`,
    `Источник: ${source}`,
    `Отправлено: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`
  ];

  return lines.join("\n");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as RsvpPayload;

    const normalized = {
      name: normalizeValue(payload.name),
      attendance: normalizeValue(payload.attendance),
      alcohol: normalizeValue(payload.alcohol),
      meal: normalizeValue(payload.meal),
      allergies: normalizeValue(payload.allergies),
      transfer: normalizeValue(payload.transfer)
    };

    if (!normalized.name) {
      return NextResponse.json({ error: "Укажите имя и фамилию." }, { status: 400 });
    }

    if (!normalized.attendance || !normalized.alcohol || !normalized.meal || !normalized.transfer) {
      return NextResponse.json({ error: "Заполните обязательные поля анкеты." }, { status: 400 });
    }

    const botToken = requireEnv("TELEGRAM_BOT_TOKEN");
    const chatId = requireEnv("TELEGRAM_CHAT_ID");
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
      body: JSON.stringify(messagePayload)
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
