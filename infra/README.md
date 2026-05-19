# Infra

Продакшен-запуск собран вокруг двух контейнеров:

- `app` - standalone Next.js-приложение на Node.js.
- `proxy` - Nginx reverse proxy, который принимает внешний HTTP-трафик и прокидывает его в `app`.

RSVP-ответы сохраняются в Docker volume `rsvp-data`, поэтому они переживают пересборку и пересоздание контейнеров.

Домен проекта: `24wedding.ru`.

В `.env` укажите:

```bash
DOMAIN_NAME=24wedding.ru www.24wedding.ru
```

В DNS направьте `24wedding.ru` и `www.24wedding.ru` на IP сервера, затем перезапустите compose.
