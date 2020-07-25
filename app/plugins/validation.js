'use strict'
const fp = require("fastify-plugin")
const { validator } = require('@exodus/schemasafe')

module.exports = fp(async function (fastify, opts) {
    fastify.setValidatorCompiler(({ schema, method, url, httpStatus }) => {
        return function (data) {
            const validate = validator(schema, { includeErrors: true, allErrors: true })
            if (!validate(data)) {
                validate.errors.forEach(element => {
                    const module = schema.id;
                    var problemTemp = element.keywordLocation.split("/");
                    var problem = problemTemp[problemTemp.length - 1];
                    var fieldTemp = element.instanceLocation.split("/");
                    var field = fieldTemp[fieldTemp.length - 1];
                    const temp = fastify.i18n.__('properties.' + field, module);
                    element.message = fastify.i18n.__('validation.' + problem, temp, module);
                });
                return { error: validate.errors }
            };
        }
    })
    fastify.decorate('schemasafe', validator)
})