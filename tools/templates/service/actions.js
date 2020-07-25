async function all(request, reply) {
    const { __service__(pascalCase)
} = this.objection;
const records = await __service__(pascalCase).query().throwIfNotFound();
return { data: records }
}

async function get(request, reply) {
    const { recordId } = request.params;
    const { __service__(pascalCase)
} = this.objection;
const record = await __service__(pascalCase).query().findById(recordId).throwIfNotFound();
reply.send({ data: record })
}

async function post(request, reply) {
    const { name } = request.body;
    const { __service__(pascalCase)
} = this.objection;
const record = await __service__(pascalCase).query().insert({
    name
});
reply.send({ data: record })
}

async function put(request, reply) {
    const { id, name } = request.body;
    const { __service__(pascalCase)
} = this.objection;
const record = await __service__(pascalCase).query()
    .patchAndFetchById(id, {
        name
    }).throwIfNotFound();
reply.send({ data: record })
}

async function del(request, reply) {
    const { recordId } = request.params;
    const { __service__(pascalCase)
} = this.objection;
const record = await __service__(pascalCase).query().deleteById(recordId).throwIfNotFound();
reply.send({ success: true })
}


module.exports = {
    all,
    get,
    post,
    put,
    del,
}