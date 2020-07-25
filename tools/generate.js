const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Create Model',
        defaultCase: '(lowerCase)',
        entry: {
            folderPath: './tools/templates/model/',
        },
        stringReplacers: [{ question: 'Name?', slot: '__model__' }],
        output: {
            path: './app/models/',
            pathAndFileNameDefaultCase: '(kebabCase)',
            overwrite: true
        },
    },
    {
        option: 'Create Service',
        defaultCase: '(lowerCase)',
        entry: {
            folderPath: './tools/templates/service/',
        },
        stringReplacers: [{ question: 'Name?', slot: '__service__' }],
        output: {
            path: './app/services/__service__(lowerCase)',
            pathAndFileNameDefaultCase: '(kebabCase)'
        }
    },
    {
        option: 'Create Migration',
        defaultCase: '(lowerCase)',
        entry: {
            folderPath: './tools/templates/migration/__model__.js',
        },
        stringReplacers: [{ question: 'Name?', slot: '__model__' }],
        output: {
            path: './database/migrations/__model__(lowerCase).js',
            pathAndFileNameDefaultCase: '(kebabCase)'
        }
    },
    {
        option: 'Create Seed',
        defaultCase: '(lowerCase)',
        entry: {
            folderPath: './tools/templates/seed/__model__.js',
        },
        stringReplacers: [{ question: 'Name?', slot: '__model__' }],
        output: {
            path: './database/seeds/__model__(lowerCase).js',
            pathAndFileNameDefaultCase: '(kebabCase)'
        }
    },
]);