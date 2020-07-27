module.exports = function (fastify) {

    async function verifEmail(email, token) {
        return await fastify.mailer.sendMail({
            from: '"FastifyStarter 👻" <foo@example.com>',
            to: email,
            subject: "Hello ✔",
            text: "Hello world? " + token,
            html: "<b>Hello world?</b> " + token
        });
    }

    return {
        verifEmail
    };

};