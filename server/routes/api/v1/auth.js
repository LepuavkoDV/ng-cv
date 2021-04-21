import express from 'express'
import Auth from '../../../controllers/auth.controller'

const auth = express.Router()

const AuthController = new Auth()

// auth.post('/register', (req, res) => {
//   AuthController.Register(req, res)
// })

auth.post('/login', (req, res, next) => {
  AuthController.Login(req, res, next)
})

export default auth
