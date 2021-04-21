import express from 'express'
import Tags from '../../../controllers/tags.controller'
import Videos from '../../../controllers/videos.controller'

const api = express.Router()

api.get('/', (req, res) => {
  Tags.list().then(result => {
    res.status(result.status).send(result.data)
  })
})

api.post('/', (req, res) => {
  Tags.add(req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.get('/:id/videos', (req, res) => {
  Videos.list({ type: 'tag', id: req.params.id }).then(result => {
    res.status(result.status).send(result.data)
  })
})

export default api
