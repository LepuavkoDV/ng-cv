import mongoose from 'mongoose'
import relationship from 'mongoose-relationship'
/* eslint-disable no-unused-vars */
import { Tag } from './Tag'

const Schema = mongoose.Schema

const VideoSchema = new Schema({
  YTId: { type: String, required: true },
  title: { type: String, required: true },
  link: { type: String, required: true },
  duration: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', childPath: 'videos' }],
  createdAt: { type: Date }
})

VideoSchema.plugin(relationship, { relationshipPathName: 'tags' })

export const Video = mongoose.model('Video', VideoSchema)
