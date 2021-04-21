import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import Debug from 'debug'
import gql from '../routes/graphql'

class GqlServer {
  constructor () {
    dotenv.config()

    this.port = process.env.PORT || 5001
    this.debug = Debug('server:*')
    this.app = express()

    this.app.use(morgan('dev'))
    this.app.use('/gql', gql)
  }

  run () {
    this.app.listen(this.port, () => this.debug('GraphQL Server listening on port:', this.port))
  }
}

export default GqlServer
