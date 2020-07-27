async function routes(fastify, options) {
    fastify.get('/', {
        schema: fastify.user.schemas.all,
        handler: fastify.user.handlers.all,
        onRequest: [fastify.retrieveToken, fastify.retrieveUser, fastify.perm],
        config: {
            ...options.config,
            action: 'all'
        }
    })
    fastify.get('/:recordId', {
        schema: fastify.user.schemas.get,
        handler: fastify.user.handlers.get,
        onRequest: [fastify.retrieveToken, fastify.retrieveUser, fastify.perm],
        config: {
            ...options.config,
            action: 'get'
        }
    })
    fastify.post('/', {
        schema: fastify.user.schemas.post,
        handler: fastify.user.handlers.post,
        onRequest: [fastify.retrieveToken, fastify.retrieveUser, fastify.perm],
        config: {
            ...options.config,
            action: 'post'
        }
    })
    fastify.put('/', {
        schema: fastify.user.schemas.put,
        handler: fastify.user.handlers.put,
        onRequest: [fastify.retrieveToken, fastify.retrieveUser, fastify.perm],
        config: {
            ...options.config,
            action: 'put'
        }
    })
    fastify.delete('/:recordId', {
        schema: fastify.user.schemas.del,
        handler: fastify.user.handlers.del,
        onRequest: [fastify.retrieveToken, fastify.retrieveUser, fastify.perm],
        config: {
            ...options.config,
            action: 'del'
        }
    })

}
module.exports = routes