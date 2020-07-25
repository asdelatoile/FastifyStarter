async function all(request, reply) {
    const { Restaurant
} = this.objection;
const records = await Restaurant.query().throwIfNotFound();
return { data: records }
}

async function get(request, reply) {
    const { recordId } = request.params;
    const { Restaurant
} = this.objection;
const record = await Restaurant.query().findById(recordId).throwIfNotFound();
reply.send({ data: record })
}

async function post(request, reply) {
    const { name } = request.body;
    const { Restaurant
} = this.objection;
const record = await Restaurant.query().insert({
    name
});
reply.send({ data: record })
}

async function put(request, reply) {
    const { id, name } = request.body;
    const { Restaurant
} = this.objection;
const record = await Restaurant.query()
    .patchAndFetchById(id, {
        name
    }).throwIfNotFound();
reply.send({ data: record })
}

async function del(request, reply) {
    const { recordId } = request.params;
    const { Restaurant
} = this.objection;
const record = await Restaurant.query().deleteById(recordId).throwIfNotFound();
reply.send({ success: true })
}


module.exports = {
    all,
    get,
    post,
    put,
    del,
}