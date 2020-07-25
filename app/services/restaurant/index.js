'use strict'
const fp = require("fastify-plugin")

module.exports = fp(async function (fastify, opts) {
    fastify.decorate('restaurant', {
        handlers: require('./actions'),
        schemas: require('./schemas'),
    })
    fastify.i18n.configure({
        directory: __dirname + '/locales',
        dirName: 'restaurant',
        locales: fastify.i18nConfig.locales,
        defaultLocale: fastify.i18nConfig.defaultLocale,
        objectNotation: true
    });
    fastify.register(require('./routes'), {
        prefix: 'api/restaurant',
        config: {
            module: 'restaurant'
        }
    })
})