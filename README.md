# Wedding Invitation

Электронное свадебное приглашение на `Next.js + TypeScript` с RSVP-формой и закрытым просмотром ответов.

## Архитектура

- `app/` - Next.js App Router, страницы и API routes.
- `components/` - секции лендинга и интерактивные UI-блоки.
- `data/` - контент, даты, настройки и дизайн-токены.
- `public/` - публичная статика.
- `fonts/` - локальные шрифты для `next/font`.
- `infra/` - инфраструктурные файлы для продакшен-запуска.
- `docs/` - проектные заметки и решения.

В продакшене проект запускается в двух контейнерах:

- `app` - standalone Next.js-приложение.
- `proxy` - Nginx reverse proxy. Пока домена нет, он принимает запросы по IP/localhost; когда домен появится, достаточно поменять `DOMAIN_NAME` в `.env`.

RSVP-ответы сохраняются в Docker volume `rsvp-data`, поэтому не пропадают после пересборки контейнера.

## Переменные окружения

Создайте `.env` из примера:

```bash
cp .env.example .env
```

Основные настройки:

```bash
HTTP_PORT=80
DOMAIN_NAME=_
CLIENT_MAX_BODY_SIZE=1m
RSVP_RESULTS_KEY=change_me
```

- `HTTP_PORT` - внешний порт Nginx.
- `DOMAIN_NAME` - домен сайта. Для этого проекта: `24wedding.ru www.24wedding.ru`.
- `CLIENT_MAX_BODY_SIZE` - лимит размера запроса.
- `RSVP_RESULTS_KEY` - приватный код для просмотра RSVP-ответов через кнопку `Ответы`.

## Локальная разработка

Если Node.js установлен локально:

```bash
npm install
npm run dev
```

Если удобнее запускать сразу как на сервере:

```bash
docker compose up -d --build
```

После запуска сайт будет доступен на `http://localhost` или на порту из `HTTP_PORT`.

## Деплой на VPS

1. Скопируйте проект на сервер.
2. Создайте `.env`:

```bash
cp .env.example .env
```

3. Поменяйте `RSVP_RESULTS_KEY` на свой приватный код.
4. Укажите домен:

```bash
DOMAIN_NAME=24wedding.ru www.24wedding.ru
HTTP_PORT=80
```

5. Запустите контейнеры:

```bash
docker compose up -d --build
```

Полезные команды:

```bash
docker compose ps
docker compose logs -f
docker compose restart
docker compose down
```

## Подключение домена позже

Когда домен появится:

1. Направьте A-записи домена на IP сервера:

```text
24wedding.ru -> IP_сервера
www.24wedding.ru -> IP_сервера
```

2. В `.env` замените:

```bash
DOMAIN_NAME=24wedding.ru www.24wedding.ru
```

3. Перезапустите proxy:

```bash
docker compose up -d
```

Для HTTPS можно поставить внешний Traefik/Caddy или добавить Certbot/Nginx-конфиг поверх текущей схемы.

## Проверка

Health endpoint:

```bash
curl http://localhost/api/health
```

Ожидаемый ответ:

```json
{"ok":true,"service":"wedding-invitation"}
```
