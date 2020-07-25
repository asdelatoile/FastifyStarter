
exports.up = async function (knex) {
    await knex.schema.createTable('__model__', function (table) {
        table.increments('id');
        table.string('name');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTable('__model__')
};
