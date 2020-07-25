const fp = require('fastify-plugin')
const AccessControl = require('accesscontrol');

function permission(fastify, options, next) {

    let grantList = [
        { role: 'admin', resource: 'video', action: 'create:any', attributes: '*, !views' },
        { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },
        { role: 'admin', resource: 'video', action: 'update:any', attributes: '*, !views' },
        { role: 'admin', resource: 'video', action: 'delete:any', attributes: '*' },

        { role: 'user', resource: 'video', action: 'create:own', attributes: '*, !rating, !views' },
        { role: 'user', resource: 'video', action: 'read:own', attributes: '*' },
        { role: 'user', resource: 'video', action: 'update:own', attributes: '*, !rating, !views' },
        { role: 'user', resource: 'video', action: 'delete:own', attributes: '*' }
    ];
    const ac = new AccessControl(grantList);
    if (!fastify.ac) {
        fastify.decorate('ac', ac)
    } else {
        next(new Error('AC has already registered.'))
        return
    }
    next()
}
module.exports = fp(permission)