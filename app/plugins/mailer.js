'use strict'
const fp = require('fastify-plugin')
const nodemailer = require("nodemailer");


function mailerPlugin(fastify, options, next) {

    let transporter = nodemailer.createTransport(options);

    if (!fastify.mailer) {
        fastify.decorate('mailer', transporter)
    } else {
        next(new Error('i18n has already registered.'))
        return
    }

    next()
}


module.exports = fp(mailerPlugin)