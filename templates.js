module.exports = {
    container_start: e =>
        ` <b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) {${e.Actor.ID.substr(0, 12)}}</b> elindítva!`,

    container_die: e =>
        `<b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) {${e.Actor.ID.substr(0, 12)}}</b>\nExit Code: <b>${e.Actor.Attributes.exitCode}</b> leállítva!`,

    'container_health_status: healthy': e =>
        `<b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) {${e.Actor.ID.substr(0, 12)}}</b> konténer státusza: <b>Kielégítő!</b>`,

    'container_health_status: unhealthy': e =>
        `<b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) {${e.Actor.ID.substr(0, 12)}}</b> konténer státusza: <b>Válságos!</b>`,
};