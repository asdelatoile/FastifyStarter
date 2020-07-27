const { Model } = require('objection')

class Role extends Model {

    static get tableName() {
        return 'roles';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],

            properties: {
                name: { type: 'string' }
            }
        }
    }

    static get relationMappings() {
        const User = require('./user.model')
        const Permission = require('./permission.model')
        return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'roles.id',
                    through: {
                        from: 'users_roles.roleId',
                        to: 'users_roles.userId'
                    },
                    to: 'users.id'
                }
            },
            permissions: {
                relation: Model.HasManyRelation,
                modelClass: Permission,
                join: {
                    from: 'roles.id',
                    to: 'permissions.roleId'
                }
            }

        };

    }
}

module.exports = Role