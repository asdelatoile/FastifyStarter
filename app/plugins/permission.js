const fp = require('fastify-plugin')
const AccessControl = require('role-acl');

function permission(fastify, options, next) {

    let grantList = [
        { role: 'superadmin', resource: '*', action: '*', attributes: '*' },
        { role: 'guest', resource: 'auth', action: 'me', attributes: ['*', '!id', '!createdAt', '!updatedAt'] }
    ];
    const ac = new AccessControl(grantList);
    if (!fastify.ac) {
        fastify.decorate('ac', ac)
        fastify.decorate("perm", async function (request, reply) {
            console.log(request.user);
            let userRoles = request.user.roles.map((acc) => acc.name)
            const permission = await ac.can(userRoles).execute(reply.context.config.action).on(reply.context.config.module)
            if (permission.granted) {
                reply.permission = permission;
            } else {
                throw fastify.createError.Unauthorized("Mauvaises permissions")
            }
        })
    } else {
        next(new Error('AC has already registered.'))
        return
    }
    next()
}
module.exports = fp(permission)