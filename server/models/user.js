import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  createdAt: { type: Date }
})

UserSchema.plugin(passportLocalMongoose)

export const User = mongoose.model('User', UserSchema)
