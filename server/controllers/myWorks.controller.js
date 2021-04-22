import result from '../system/result'
import { MyWork } from '../models/myWorks'

const myWorks = {
  /**
   * List my works
   */
  async list () {
    try {
      result.data = await MyWork.find()
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  /**
   * Add new entry
   * @param {object} data
   */
  async add (data) {
    try {
      const myWork = new MyWork({
        title: data.title,
        position: data.position,
        period: data.period,
        text: data.text,
        createdAt: new Date()
      })

      result.data = await myWork.save()
      result.status = 201
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  /**
   * Update existing entry
   * @param {string} id object id in mongodb
   * @param {object} data
   */
  async update (id, data) {
    try {
      MyWork.findByIdAndUpdate(id, {
        $set: {
          title: data.title,
          position: data.position,
          period: data.period,
          text: data.text
        }
      }, {
        new: true
      }, (err, mywork) => {
        if (err) {
          result.data = err
          result.status = 500
        }
        result.data = mywork
        result.status = 200
      })
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  /**
   * Remove existing entry
   * @param {string} id object id in mongodb
   */
  async remove (id) {
    try {
      MyWork.findByIdAndRemove(id, (r) => {
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

export default myWorks
