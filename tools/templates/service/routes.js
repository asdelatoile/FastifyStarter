async function routes(fastify, options) {
    fastify.get('/', {
        schema: fastify.__service__.schemas.all,
        handler: fastify.__service__.handlers.all,
        config: {
            ...options.config,
            action: 'all'
        }
    })
    fastify.get('/:recordId', {
        schema: fastify.__service__.schemas.get,
        handler: fastify.__service__.handlers.get,
        config: {
            ...options.config,
            action: 'get'
        }
    })
    fastify.post('/', {
        schema: fastify.__service__.schemas.post,
        handler: fastify.__service__.handlers.post,
        config: {
            ...options.config,
            action: 'post'
        }
    })
    fastify.put('/', {
        schema: fastify.__service__.schemas.put,
        handler: fastify.__service__.handlers.put,
        config: {
            ...options.config,
            action: 'put'
        }
    })
    fastify.delete('/:recordId', {
        schema: fastify.__service__.schemas.del,
        handler: fastify.__service__.handlers.del,
        config: {
            ...options.config,
            action: 'del'
        }
    })

}
module.exports = routes