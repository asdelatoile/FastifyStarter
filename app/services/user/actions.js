async function all(request, reply) {
    const { User
    } = this.objection;
    const testRecords = await User.query().withGraphJoined('[roles.[permissions]]').throwIfNotFound();
    console.log(JSON.stringify(testRecords));
    const records = await User.query().withGraphJoined('[roles]').throwIfNotFound();
    return { data: testRecords }
}

async function get(request, reply) {
    const { recordId } = request.params;
    const { User
    } = this.objection;
    const record = await User.query().withGraphJoined('[roles]').findById(recordId).throwIfNotFound();
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