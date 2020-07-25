async function routes(fastify, options) {
    fastify.get('/', {
        schema: fastify.__service__.schemas.all,
        handler: fastify.__service__.handlers.all,
        config: options.config
    })
    fastify.get('/:recordId', {
        schema: fastify.__service__.schemas.get,
        handler: fastify.__service__.handlers.get,
        config: options.config
    })
    fastify.post('/', {
        schema: fastify.__service__.schemas.post,
        handler: fastify.__service__.handlers.post,
        config: options.config
    })
    fastify.put('/', {
        schema: fastify.__service__.schemas.put,
        handler: fastify.__service__.handlers.put,
        config: options.config
    })
    fastify.delete('/:recordId', {
        schema: fastify.__service__.schemas.del,
        handler: fastify.__service__.handlers.del,
        config: options.config
    })

}
module.exports = routes