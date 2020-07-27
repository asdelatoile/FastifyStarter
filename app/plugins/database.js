'use strict'
const fp = require('fastify-plugin')
const Knex = require('knex')
const { Model } = require('objection')

const modelsFolder = __dirname + '/../models/';
const fs = require('fs');


function database(fastify, options, next) {

    const knexConnection = Knex(options)

    const objection = {
        knex: knexConnection
    }

    fs.readdir(modelsFolder, (err, files) => {
        files.forEach(file => {
            const nameModule = file
            const nameModuleCapitalized = nameModule.charAt(0).toUpperCase() + nameModule.slice(1)
            var name = nameModuleCapitalized.replace('.model.js', '');
            objection[name] = require(modelsFolder + file);
        });
    });

    Model.knex(knexConnection)

    if (!fastify.objection) {
        fastify.decorate('objection', objection)
        setTimeout(() => {
            next()
        }, 100);

    } else {
        next(new Error('objectionjs has already registered.'))
        return
    }

    fastify.addHook('onClose', (fastify, done) => {
        knexConnection.destroy()
        done()
    })

}

module.exports = fp(database)