'use strict'

const object = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' }
    }
}

const all = {
    headers: {
        title: '__service__',
        type: 'object',
        properties: {
        },
        required: []
    },
    response: {
        200: {
            type: 'object',
            required: ['data'],
            properties: {
                data: { type: 'array', items: object }
            },
            additionalProperties: false
        }
    }
}

const get = {
    headers: {
        title: '__service__',
        type: 'object',
        properties: {
        },
        required: []
    },
    params: {
        title: '__service__',
        type: 'object',
        required: ['recordId'],
        properties: {
            recordId: { type: 'string' }
        }
    },
    response: {
        200: {
            type: 'object',
            required: ['data'],
            properties: {
                data: object
            },
            additionalProperties: false
        }
    }
}

const post = {
    headers: {
        title: '__service__',
        type: 'object',
        properties: {
        },
        required: []
    },
    body: {
        title: '__service__',
        type: 'object',
        properties: {
            name: { type: 'string' }
        },
        additionalProperties: false,
        required: ['name']
    },
    response: {
        200: {
            type: 'object',
            required: ['data'],
            properties: {
                data: object
            },
            additionalProperties: false
        }
    }
}

const put = {
    headers: {
        title: '__service__',
        type: 'object',
        properties: {
        },
        required: []
    },
    body: {
        title: '__service__',
        type: 'object',
        properties: {
            id: { type: 'integer' },
            name: { type: 'string' }
        },
        additionalProperties: false,
        required: ['id', 'name']
    },
    response: {
        200: {
            type: 'object',
            required: ['data'],
            properties: {
                data: object
            },
            additionalProperties: false
        }
    }
}

const del = {
    headers: {
        title: '__service__',
        type: 'object',
        properties: {
        },
        required: []
    },
    params: {
        title: '__service__',
        type: 'object',
        required: ['recordId'],
        properties: {
            recordId: { type: 'string' }
        }
    },
    response: {
        200: {
            type: 'object',
            required: ['success'],
            properties: {
                success: { type: 'boolean' }
            },
            additionalProperties: false
        }
    }
}

module.exports = {
    all,
    get,
    post,
    put,
    del,
}