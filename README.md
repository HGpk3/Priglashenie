# Wedding Invitation Website

Проект электронного свадебного приглашения на `Next.js + TypeScript` с анкетой RSVP и просмотром ответов прямо на сайте.

## RSVP

Форма отправляет ответы на `POST /api/rsvp`. Сервер валидирует обязательные поля, проверяет допустимые варианты ответов, ограничивает частые повторные отправки, отсекает простые спам-боты через скрытое поле и сохраняет ответы в локальный JSONL-файл.

Нужны переменные окружения:

```bash
APP_PORT=3000
RSVP_RESULTS_KEY=your_private_code
RSVP_STORAGE_PATH=.data/rsvp-submissions.jsonl
```

`RSVP_RESULTS_KEY` - код доступа для просмотра ответов через маленькую кнопку `Ответы` в правом нижнем углу сайта.

`RSVP_STORAGE_PATH` можно оставить по умолчанию. На VPS или в Docker важно смонтировать/сохранить директорию `.data`, если контейнер будет пересоздаваться.

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

Проект проверяется через Docker:

```bash
docker compose up -d --build
```

Для просмотра RSVP-ответов обязательно заменить `RSVP_RESULTS_KEY` в `.env` на свой код.
