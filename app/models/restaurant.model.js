const { Model } = require('objection')

class Restaurant extends Model {

    static get tableName() {
        return 'restaurant';
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

module.exports = Restaurant