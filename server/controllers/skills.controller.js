import result from '../system/result'
import { Skill } from '../models/skills'

const skills = {
  async list () {
    try {
      result.data = await Skill.find().populate('group')
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async add (data) {
    try {
      const skill = new Skill({
        title: data.title,
        value: data.value,
        group: data.group,
        createdAt: new Date()
      })

      result.data = await skill.save()
      result.status = 201
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async update (id, data) {
    try {
      Skill.findByIdAndUpdate(id, {
        $set: {
          title: data.title,
          value: data.value
        }
      }, {
        new: true
      }, (err, skill) => {
        if (err) {
          result.data = err
          result.status = 500
        }
        result.data = skill
        result.status = 200
      })
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async remove (id) {
    try {
      Skill.findByIdAndRemove(id, (r) => {
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

export default skills
