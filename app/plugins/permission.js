const fp = require('fastify-plugin')
const AccessControl = require('role-acl');

async function permission(fastify, options, next) {

    let grantList = [];

    const { Role
    } = fastify.objection;
    const records = await Role.query().withGraphJoined('[permissions]')
    records.forEach(role => {
        role.permissions.forEach(permission => {
            grantList.push({
                role: role.name,
                resource: permission.resource,
                action: permission.action,
                attributes: permission.attributes
            })
        })
    });

    const ac = new AccessControl(grantList);
    if (!fastify.ac) {
        fastify.decorate('ac', ac)
        fastify.decorate("perm", async function (request, reply) {
            let userRoles = request.user.roles.map((acc) => acc.name)
            const permission = await ac.can(userRoles).execute(reply.context.config.action).on(reply.context.config.module)
            if (permission.granted) {
                reply.permission = permission;
            } else {
                throw fastify.createError.Unauthorized(fastify.i18n.__("error.UnauthorizedError"))
            }
        })
        next()
    } else {
        next(new Error('AC has already registered.'))
        return
    }

}
module.exports = fp(permission)