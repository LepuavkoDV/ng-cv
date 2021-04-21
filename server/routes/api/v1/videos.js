import express from 'express'
import Videos from '../../../controllers/videos.controller'

const api = express.Router()

api.get('/', (req, res) => {
  Videos.list().then(result => {
    res.status(result.status).send(result.data)
  })
})

api.post('/', (req, res) => {
  Videos.add(req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.post('/:id/tags', (req, res) => {
  Videos.updateTags(req.params.id, req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

export default api
