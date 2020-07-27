'use strict'
const fp = require("fastify-plugin")

module.exports = fp(async function (fastify, opts) {
    fastify.decorate('user', {
        handlers: require('./actions'),
        schemas: require('./schemas'),
    })
    fastify.register(require('./routes'), {
        prefix: 'api/user',
        config: {
            module: 'user'
        }
    })
})