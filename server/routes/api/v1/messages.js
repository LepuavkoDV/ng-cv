import express from 'express'
// import passport from 'passport'
import SendemailController from '../../../controllers/sendemail.controller'

const Sendemail = new SendemailController()
const api = express.Router()

api.post('/', (req, res) => {
  Sendemail.send(req, res)
})

export default api
