import express from 'express'
import passport from 'passport'
import MyWorks from '../../../controllers/myWorks.controller'

const api = express.Router()

api.get('/', (req, res) => {
  MyWorks.list().then(result => {
    res.status(result.status).send(result.data)
  })
})

api.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorks.add(req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorks.update(req.params.id, req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorks.remove(req.params.id).then(result => {
    res.status(result.status).send(result.data)
  })
})

export default api
