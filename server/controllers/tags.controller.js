import result from '../system/result'
import { Tag } from '../models/Tag'
import { Video } from '../models/Video'
import _ from 'lodash'
import mongoose from 'mongoose'

const tags = {
  async list () {
    try {
      result.data = await Tag.find().populate('videos').sort('createdAt')
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async add (data) {
    try {
      const tag = new Tag({
        title: data.title,
        createdAt: new Date()
      })

      result.data = await tag.save()
      result.status = 201
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async updateRelations (tags) {
    try {
      _.each(tags, async (tag) => {
        // for each tag we finding all videos related to this tag
        const videosWithThisTag = await Video.find({ tags: mongoose.Types.ObjectId(tag) })
        let videos = []
        _.each(videosWithThisTag, (item) => {
          videos.push(item._id)
        })
        // and update tag > video relation
        await Tag.findByIdAndUpdate(tag, {
          $set: { videos: videos }
        }, { new: false }, (err, tag) => {
          if (err) {
            result.data = err
            result.status = 500
          }
        })
      })
      result.data = {}
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  }
}

export default tags
