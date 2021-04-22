import mongoose from 'mongoose'
/* eslint-disable no-unused-vars */
import { Video } from './Video'

const Schema = mongoose.Schema

const TagSchema = new Schema({
  title: { type: String, required: true },
  videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
  createdAt: { type: Date }
})

export const Tag = mongoose.model('Tag', TagSchema)
