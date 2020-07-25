exports.seed = async function (knex) {
    await knex('restaurant').del()
    await knex('restaurant').insert([
        {
            id: 1,
            name: 'hello',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ]);
}