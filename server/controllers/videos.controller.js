import result from '../system/result'
import { Video } from '../models/Video'
import Tags from './tags.controller'
import _ from 'lodash'

const videos = {
  async list (query = null) {
    try {
      let scope = {}
      if (query !== null) {
        switch (query.type) {
          case 'category':
            scope.category = query.id
            break
          case 'tag':
            scope.tags = query.id
            break
        }
      }

      result.data = await Video.find(scope).populate('tags').sort('-createdAt')
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async add (data) {
    try {
      const video = new Video({
        YTId: data.YTId,
        title: data.title,
        duration: data.duration,
        link: data.link,
        tags: data.tags,
        createdAt: new Date()
      })

      result.data = await video.save()
      result.status = 201
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async updateTags (id, data) {
    try {
      // some tags may be removed or added
      // so make sure all tags will be updated
      const video = await Video.findById(id)
      const oldTags = video.tags
      let tagsToUpdate = _.uniq(_.concat(oldTags, data.tags))

      // update video with new tags
      Video.findByIdAndUpdate(id, {
        $set: {
          tags: data.tags
        }
      }, {
        new: true
      }, (err, video) => {
        if (err) {
          result.data = err
          result.status = 500
        }

        // after video updated - updating all involved tags with new relations
        Tags.updateRelations(tagsToUpdate)

        result.data = {}
        result.status = 200
      })
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  }
}

export default videos
