import mongoose from 'mongoose'

class Database {
  constructor () {
    this.user = process.env.DB_USER
    this.password = process.env.DB_PASSWORD
    this.host = process.env.DB_HOST
    this.port = process.env.DB_PORT
    this.dbName = process.env.DB_NAME
  }

  async connect () {
    const url = `mongodb+srv://${this.user}:${this.password}@ldvcv.evxiw.gcp.mongodb.net/${this.dbName}?retryWrites=true&w=majority`
    return mongoose.connect(url, { useNewUrlParser: true })
  }
}

export default Database
