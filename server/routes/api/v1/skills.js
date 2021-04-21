import express from 'express'
import passport from 'passport'
import Skills from '../../../controllers/skills.controller'

const api = express.Router()

api.get('/', (req, res) => {
  Skills.list().then(result => {
    res.status(result.status).send(result.data)
  })
})

api.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Skills.add(req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Skills.update(req.params.id, req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Skills.remove(req.params.id).then(result => {
    res.status(result.status).send(result.data)
  })
})

export default api
