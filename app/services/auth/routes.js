async function routes(fastify, options) {

    fastify.get('/me', {
        schema: fastify.auth.schemas.me,
        handler: fastify.auth.handlers.me,
        onRequest: [fastify.retrieveToken, fastify.retrieveUser],
        config: options.config
    })
    fastify.post('/register', {
        schema: fastify.auth.schemas.register,
        handler: fastify.auth.handlers.register,
        config: options.config
    })
    fastify.post('/login', {
        schema: fastify.auth.schemas.login,
        handler: fastify.auth.handlers.login,
        config: options.config
    })


}
module.exports = routes