
exports.up = async function (knex) {
    await knex.schema.createTable('restaurant', function (table) {
        table.increments('id');
        table.string('name');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTable('restaurant')
};
