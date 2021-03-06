'use strict'
const fp = require("fastify-plugin")

module.exports = fp(async function (fastify, opts) {
    fastify.decorate('__service__', {
        handlers: require('./actions'),
        schemas: require('./schemas'),
    })
    fastify.register(require('./routes'), {
        prefix: 'api/__service__',
        config: {
            module: '__service__'
        }
    })
})