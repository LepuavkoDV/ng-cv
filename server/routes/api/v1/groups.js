import express from 'express'
import passport from 'passport'
import Groups from '../../../controllers/groups.controller'

const api = express.Router()

api.get('/', (req, res) => {
  Groups.list().then(result => {
    res.status(result.status).send(result.data)
  })
})

api.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Groups.add(req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Groups.update(req.params.id, req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Groups.remove(req.params.id).then(result => {
    res.status(result.status).send(result.data)
  })
})

export default api
