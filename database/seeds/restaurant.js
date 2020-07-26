exports.seed = async function (knex) {
    await knex('restaurant').del()
    await knex('restaurant').insert([
        {
            id: 1,
            name: 'Name 1',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 2,
            name: 'Name 2',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 3,
            name: 'Name 3',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 4,
            name: 'Name 4',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 5,
            name: 'Name 5',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ]);
}