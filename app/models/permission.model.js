const { Model } = require('objection')

class Permission extends Model {

    static get tableName() {
        return 'permissions';
    }

    static get idColumn() {
        return 'id';
    }

    // static get jsonSchema() {
    //     return {
    //         type: 'object',
    //         required: ['name'],

    //         properties: {
    //             name: { type: 'string' }
    //         }
    //     }
    // }

    static get relationMappings() {
        const Role = require('./role.model')
        return {
            role: {
                relation: Model.HasOneRelation,
                modelClass: Role,
                join: {
                    from: 'roles.id',
                    to: 'permissions.roleId'
                }
            }
            //         users: {
            //             relation: Model.ManyToManyRelation,
            //             modelClass: User,
            //             join: {
            //                 from: 'roles.id',
            //                 through: {
            //                     from: 'users_roles.roleId',
            //                     to: 'users_roles.userId'
            //                 },
            //                 to: 'users.id'
            //             }
            //         }
        };
    }
}

module.exports = Permission