'use strict'
const fp = require("fastify-plugin")


module.exports = fp(async function (fastify, opts) {

    fastify.register(require("fastify-jwt"), opts)

    fastify.decorate("retrieveToken", async function (request, reply) {
        try {
            await request.jwtVerify()
        } catch (err) {
            throw fastify.createError.Unauthorized(fastify.i18n.__('auth.Token'))
        }
    })

    fastify.decorate("generateToken", async function (options) {
        const token = await fastify.jwt.sign(options);
        return token;
    })

    fastify.decorate("retrieveUser", async function (request, reply) {
        try {
            const { User } = fastify.objection
            console.log(request)
            const user = await User.query()
                .withGraphJoined('[roles]')
                .findById(request.user.id)
            if (!user) {
                throw fastify.createError.NotFound({ message: fastify.i18n.__('auth.UserNotFound') })
            }
            request.user = user
        } catch (err) {
            return reply.send(err)
        }
    })

})