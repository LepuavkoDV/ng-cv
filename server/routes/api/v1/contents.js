import express from 'express'
import passport from 'passport'
import PageContent from '../../../controllers/pageContent.controller'

const api = express.Router()

api.get('/', (req, res) => {
  PageContent.list().then(result => {
    res.status(result.status).send(result.data)
  })
})

api.get('/:page', (req, res) => {
  PageContent.list(req.params.page).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContent.add(req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContent.update(req.params.id, req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContent.remove(req.params.id).then(result => {
    res.status(result.status).send(result.data)
  })
})

export default api
