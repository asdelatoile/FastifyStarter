
exports.seed = async function (knex) {
  await knex('permissions').del()
  await knex('permissions').insert([
    { id: 1, roleId: 3, resource: '*', action: '*', attributes: '' },
    { id: 2, roleId: 1, resource: 'auth', action: 'me', attributes: ['*', '!id', '!createdAt', '!updatedAt'] }
  ]);
};
