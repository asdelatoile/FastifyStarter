'use strict'

const object = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        googleId: { type: 'string' },
        facebookId: { type: 'string' },
        twitterId: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
        roles: {
            type: 'array',
            properties: {
                permissions: {
                    type: 'array'
                }
            }
        }
    }
}

const all = {
    headers: {
        title: 'user',
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
            additionalProperties: true
        }
    }
}

const get = {
    headers: {
        title: 'user',
        type: 'object',
        properties: {
        },
        required: []
    },
    params: {
        title: 'user',
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
        title: 'user',
        type: 'object',
        properties: {
        },
        required: []
    },
    body: {
        title: 'user',
        type: 'object',
        properties: {
            email: { type: 'string' },
            password: { type: 'string' }
        },
        additionalProperties: true,
        required: ['email', 'password']
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
        title: 'user',
        type: 'object',
        properties: {
        },
        required: []
    },
    body: {
        title: 'user',
        type: 'object',
        properties: {
            id: { type: 'integer' }
        },
        additionalProperties: true,
        required: ['id']
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
        title: 'user',
        type: 'object',
        properties: {
        },
        required: []
    },
    params: {
        title: 'user',
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