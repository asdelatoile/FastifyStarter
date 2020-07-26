'use strict'

const object = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' }
    }
}

const me = {
    headers: {
        title: 'auth',
        type: 'object',
        properties: {
            Authorization: {
                type: "string"
            }
        },
        required: ["Authorization"]
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


const register = {
    headers: {
        title: 'auth',
        type: 'object',
        properties: {
        },
        required: []
    },
    body: {
        title: 'auth',
        type: 'object',
        properties: {
            email: { type: 'string' },
            password: { type: 'string' }
        },
        additionalProperties: false,
        required: ['email', 'password']
    },
    response: {
        200: {
            type: 'object',
            required: ['data'],
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        token: {
                            type: 'string'
                        }

                    }
                }
            },
            additionalProperties: false
        }
    }
}

const login = {
    body: {
        title: 'auth',
        type: 'object',
        properties: {
            email: { type: 'string' },
            password: { type: 'string' }
        },
        additionalProperties: false,
        required: ['email', 'password']
    },
    response: {
        200: {
            type: 'object',
            required: ['data'],
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        token: {
                            type: 'string'
                        }

                    }
                }
            },
            additionalProperties: false
        }
    }
}


module.exports = {
    me,
    register,
    login
}