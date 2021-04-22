import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MyWorkSchema = new Schema({
  title: { type: String, required: true },
  position: {type: String, required: true},
  period: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date }
})

export const MyWork = mongoose.model('MyWork', MyWorkSchema)
