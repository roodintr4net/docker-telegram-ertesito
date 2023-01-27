# Docker Telegram Értesítő [![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/poma/docker-telegram-notifier.svg)](https://hub.docker.com/r/poma/docker-telegram-notifier/builds)

Ez egy magyarított Telegram bot. Ez értesítést küld a felhasználónak a konténer elindításáról/megállításáról/újraindításáról, valamint a konténer életjelében beálló változásokról. 
Amennyiben ezeket a prefix szövegeket át szeretnéd írni, a `templates.js` fájlban megteheted.

## Hogyan futtasd?

[Hozz létre egy Telegram Bot-ot](https://core.telegram.org/bots#3-how-do-i-create-a-bot) és az itt kapott `Bot Token` -t másold be a `TELEGRAM_NOTIFIER_BOT_TOKEN` változóhoz, majd [a Telegram Chat ID-t kinyerve](https://stackoverflow.com/a/32572159/882223).
írd be a kapott ID-t a `TELEGRAM_NOTIFIER_CHAT_ID` változóhoz.

Futtasd a konténert a következőképp:

```sh
# Docker
docker run -d --env TELEGRAM_NOTIFIER_BOT_TOKEN=token --env TELEGRAM_NOTIFIER_CHAT_ID=chat_id --volume /var/run/docker.sock:/var/run/docker.sock:ro roodintr4net/docker-telegram-notifier

# Docker Compose
curl -O https://raw.githubusercontent.com/roodintr4net/docker-telegram-ertesito/master/docker-compose.yml
docker-compose up -d
```

