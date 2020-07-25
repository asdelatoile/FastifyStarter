const { Model } = require('objection')

class __model__(pascalCase) extends Model {

    static get tableName() {
        return '__model__';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['name'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' }
            }
        }
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }

    // static get relationMappings() {
    // }
}

module.exports = __model__(pascalCase)