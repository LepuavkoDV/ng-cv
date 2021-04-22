import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ContentSchema = new Schema({
  page: { type: String, required: true },
  section: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date }
})

export const Content = mongoose.model('Content', ContentSchema)
