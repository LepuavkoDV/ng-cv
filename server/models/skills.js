import mongoose from 'mongoose'
import relationship from 'mongoose-relationship'

const Schema = mongoose.Schema

const GroupSchema = new Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
  createdAt: { type: Date }
})

const SkillSchema = new Schema({
  title: { type: String, required: true },
  value: { type: Number, required: true },
  group: { type: Schema.Types.ObjectId, ref: 'Group', childPath: 'items' },
  createdAt: { type: Date }
})

SkillSchema.plugin(relationship, { relationshipPathName: 'group' })

export const Group = mongoose.model('Group', GroupSchema)
export const Skill = mongoose.model('Skill', SkillSchema)
