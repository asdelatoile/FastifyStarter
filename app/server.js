process.env["NODE_CONFIG_DIR"] = __dirname + "/../config";
const config = require('config');

const fastify = require('fastify')({
    ...config.fastify
})
fastify.decorate('config', config)

// PLUGINS
// Database
fastify.register(require('./plugins/database'), config.database)
// Validation
fastify.register(require('./plugins/validation'))
// Errors handler
fastify.register(require('./plugins/error'))
// Lang
fastify.register(require('./plugins/i18n'), config.i18n)
// JWT
fastify.register(require('./plugins/authenticate'), config.jwt)
// Permissions
fastify.register(require('./plugins/permission'))
// Mail
fastify.register(require('./plugins/mailer'), config.nodemailer)

// MODULES
fastify.register(require('./services/user'));
fastify.register(require('./services/auth'));
// fastify.register(require('./services/restaurant'));


// SERVER
const start = async () => {
    try {
        await fastify.listen(config.server.port)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()