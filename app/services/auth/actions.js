async function me(request, reply) {
    reply.send({ data: reply.permission.filter(request.user) })
}

async function register(request, reply) {
    const { email, password } = request.body;
    const { User
    } = this.objection;
    const checkUser = await User.query().findOne({ email })
    if (checkUser) {
        throw this.createError.UnprocessableEntity(this.i18n.__('auth.UserAlredyExist'))
    }
    const user = await User.query().insertGraph({
        email,
        password,
        roles: [{ id: 1 }]
    },
        {
            relate: true
        });
    const token = await this.generateToken({ id: user.id });
    reply.code(201).send({ data: { token } })
}

async function login(request, reply) {
    const { email, password } = request.body;
    const { User
    } = this.objection;
    const user = await await User.query().findOne({ email });
    if (!user) {
        throw this.createError.Unauthorized(this.i18n.__('auth.WrongEmailorPassword'))
    }
    const authorize = await user.verifyPassword(password);
    if (!authorize) {
        throw this.createError.Unauthorized(this.i18n.__('auth.WrongEmailorPassword'))
    }
    const token = await this.generateToken({ id: user.id });
    return reply.send({ data: { token } });
}



module.exports = {
    me,
    register,
    login
}