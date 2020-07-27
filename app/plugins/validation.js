'use strict'
const fp = require("fastify-plugin")
const { validator } = require('@exodus/schemasafe')

module.exports = fp(async function (fastify, opts) {
    fastify.setValidatorCompiler(({ schema, method, url, httpStatus }) => {
        return function (data) {
            // console.log(schema, method, url, httpStatus);
            const validate = validator(schema, { includeErrors: true, allErrors: true })
            if (!validate(data)) {
                // console.log(JSON.stringify(validate.errors));
                validate.errors.forEach(element => {
                    const module = schema.title;
                    var problemTemp = element.keywordLocation.split("/");
                    var problem = problemTemp[problemTemp.length - 1];
                    var fieldTemp = element.instanceLocation.split("/");
                    var field = fieldTemp[fieldTemp.length - 1];
                    const temp = fastify.i18n.__(module + '.properties.' + field);
                    element.message = fastify.i18n.__(module + '.validation.' + problem, temp);
                });
                return { error: validate.errors }
            };
        }
    })
    fastify.decorate('schemasafe', validator)
})