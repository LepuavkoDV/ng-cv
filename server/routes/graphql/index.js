import express from 'express'
// import passport from 'passport'
import graphqlHTTP from 'express-graphql'

import resolver from './resolver'
import schema from './schema'

const api = express.Router()

api.get('/', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true
}))

api.post('/', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: false
}))

export default api
