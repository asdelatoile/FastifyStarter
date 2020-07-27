
exports.up = async function (knex) {
    await knex.schema.createTable('permissions', function (table) {
        table.increments('id');
        table.integer('roleId');
        table.string('resource');
        table.string('action');
        table.json('attributes');
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTable('permissions')
};
