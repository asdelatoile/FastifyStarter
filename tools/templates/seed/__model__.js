exports.seed = async function (knex) {
    await knex('__model__').del()
    await knex('__model__').insert([
        {
            id: 1,
            name: 'hello',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ]);
}