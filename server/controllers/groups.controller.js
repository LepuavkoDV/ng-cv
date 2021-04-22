import result from '../system/result'
import { Group } from '../models/skills'

const groups = {
  /**
   * List groups
   */
  async list () {
    try {
      result.data = await Group.find().populate('items').sort('createdAt')
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  /**
   * Add new group
   * @param {object} data
   */
  async add (data) {
    try {
      const group = new Group({
        title: data.title,
        icon: data.icon,
        createdAt: new Date()
      })

      result.data = await group.save()
      result.status = 201
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  /**
   * Update existing group
   * @param {string} id object id in mongodb
   * @param {object} data
   */
  async update (id, data) {
    try {
      Group.findByIdAndUpdate(id, {
        $set: {
          title: data.title,
          icon: data.icon
        }
      }, {
        new: true
      }, (err, group) => {
        if (err) {
          result.data = err
          result.status = 500
        }
        result.data = group
        result.status = 200
      })
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  /**
   * Remove existing group
   * @param {string} id object id in mongodb
   */
  async remove (id) {
    try {
      Group.findByIdAndRemove(id, (r) => {
        result.data = {}
        result.status = 202
      })
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  }
}

export default groups
