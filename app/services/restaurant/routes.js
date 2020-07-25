async function routes(fastify, options) {
    fastify.get('/', {
        schema: fastify.restaurant.schemas.all,
        handler: fastify.restaurant.handlers.all,
        config: options.config
    })
    fastify.get('/:recordId', {
        schema: fastify.restaurant.schemas.get,
        handler: fastify.restaurant.handlers.get,
        config: options.config
    })
    fastify.post('/', {
        schema: fastify.restaurant.schemas.post,
        handler: fastify.restaurant.handlers.post,
        config: options.config
    })
    fastify.put('/', {
        schema: fastify.restaurant.schemas.put,
        handler: fastify.restaurant.handlers.put,
        config: options.config
    })
    fastify.delete('/:recordId', {
        schema: fastify.restaurant.schemas.del,
        handler: fastify.restaurant.handlers.del,
        config: options.config
    })

}
module.exports = routes