# FastifyStarter

My personnal starter for fastify project.

### Tech

- fastify
- knex
- objection
- i18n
- @exodus/schemasafe
- onury/accesscontrol
- bcryptjs
- jwt
- lorenwest/node-config
- codeBelt/generate-template-files

### Installation

requires [Node.js](https://nodejs.org/) to run.

Clone, install the dependencies and devDependencies and start the server.

```sh
$ npm install
```

Generate your first service (example restaurant)

```sh
$ npm run generate
```

Create Model -> restaurant -> Output path: ./app/models/  
Create Service -> restaurant -> Output path: ./app/services/restaurant  
Create Migration -> restaurant -> Output path: ./database/migrations/restaurant.js  
Create Seed -> restaurant -> Output path: ./database/seeds/restaurant.js

```sh
$ npm run db:reset
```

Add your service in server.js

```js
fastify.register(require("./services/restaurant"));
```

Launch the server

```sh
$ npm run dev
```

_Urls :_  
GET http://localhost:3030/api/restaurant/  
GET http://localhost:3030/api/restaurant/1  
POST http://localhost:3030/api/restaurant/ (with body json {name:"foo"} )  
PUT http://localhost:3030/api/restaurant/ (with body json {id:1,name:"foo correct"} )  
DELETE http://localhost:3030/api/restaurant/1

_In progress :_  
JWT  
Permissions/Groups/Roles
