'use strict'
const fp = require('fastify-plugin')
var createError = require('http-errors')

module.exports = fp(function errorPlugin(fastify, options, next) {

    fastify.decorate("createError", createError);

    const errorHandler = (error, request, reply) => {
        const { validation, validationContext } = error
        let response = {
            code: error.statusCode || error.code || 500,
            name: error.name,
            message: error.message || fastify.i18n.__('error.' + error.name) || ''
        }

        if (validation) {
            response.code = 400;
            response.name = 'BadRequest';
            response["details"] = validation
        }
        reply.status(response.code).send(response)
    }
    fastify.setErrorHandler(errorHandler)
    next()
})