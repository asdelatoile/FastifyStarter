'use strict'
const fp = require('fastify-plugin')

module.exports = fp(function errorPlugin(fastify, options, next) {
    const errorHandler = (error, request, reply) => {
        // console.log(JSON.stringify(error))
        const { validation, validationContext } = error
        let response = {
            code: error.statusCode || error.code || 500,
            name: error.name,
            message: error.message || ''
        }
        if (validation) {
            response.code = 400;
            response.name = 'BadRequest';
            response["details"] = validation
        }
        response.message = fastify.i18n.__('error.' + response.name)
        reply.status(response.code).send(response)
    }
    fastify.setErrorHandler(errorHandler)
    next()
})