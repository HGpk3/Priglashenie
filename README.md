# Wedding Invitation Website

Проект электронного свадебного приглашения на `Next.js + TypeScript` с анкетой RSVP и отправкой ответов в Telegram.

## RSVP в Telegram

Форма отправляет ответы на `POST /api/rsvp`, а сервер пересылает их через Telegram Bot API.

Нужны переменные окружения:

```bash
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
TELEGRAM_THREAD_ID=optional_for_topics
APP_PORT=3000
```

Как подготовить Telegram:

1. Создай бота через `@BotFather` и получи токен.
2. Добавь бота в нужный чат или канал.
3. Отправь любое сообщение в этот чат.
4. Узнай `chat_id` через запрос:

```bash
curl "https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getUpdates"
```

Если используешь темы в Telegram-группе, `message_thread_id` можно взять из ответа `getUpdates`. Если темы не нужны, `TELEGRAM_THREAD_ID` оставь пустым.

## Локальный запуск

```bash
cp .env.example .env
npm install
npm run dev
```

## Docker и VPS

Проект готов к запуску в контейнере через `Dockerfile` и `docker-compose.yml`.

Быстрый старт:

```bash
cp .env.example .env
docker compose up -d --build
```

После этого сайт будет доступен на порту из `APP_PORT`, по умолчанию это `3000`.

Полезные команды:

```bash
docker compose logs -f
docker compose restart
docker compose down
```

## Структура

- `app/` - приложение и API-роуты
- `components/` - секции лендинга
- `data/` - тексты, даты и контент приглашения
- `design/` - выгрузки из макетов и визуальные референсы
- `public/` - публичные статические файлы

## Примечание по проверке

На этой сессии я не смог прогнать `npm run build`, потому что в текущем WSL-окружении `node` не исполняется. Поэтому правки сделаны по коду и структуре проекта, но без локальной сборки в этом окружении.
