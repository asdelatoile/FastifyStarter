'use strict'
const fp = require("fastify-plugin")

module.exports = fp(async function (fastify, opts) {
    fastify.decorate('auth', {
        handlers: require('./actions'),
        schemas: require('./schemas'),
    })
    // console.log("auth")
    fastify.register(require('./routes'), {
        prefix: 'api/auth',
        config: {
            module: 'auth'
        }
    })
})