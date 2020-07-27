async function all(request, reply) {
    const { User
    } = this.objection;
    const records = await User.query().throwIfNotFound();
    return { data: records }
}

async function get(request, reply) {
    const { recordId } = request.params;
    const { User
    } = this.objection;
    const record = await User.query().findById(recordId).throwIfNotFound();
    reply.send({ data: record })
}

async function post(request, reply) {
    const { User
    } = this.objection;
    const record = await User.query().insert(request.body);
    reply.send({ data: record })
}

async function put(request, reply) {
    const { id } = request.body;
    const { User
    } = this.objection;
    const record = await User.query()
        .patchAndFetchById(id, request.body).throwIfNotFound();
    reply.send({ data: record })
}

async function del(request, reply) {
    const { recordId } = request.params;
    const { User
    } = this.objection;
    const record = await User.query().deleteById(recordId).throwIfNotFound();
    reply.send({ success: true })
}


module.exports = {
    all,
    get,
    post,
    put,
    del,
}