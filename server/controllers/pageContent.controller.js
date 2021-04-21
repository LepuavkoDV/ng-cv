import result from '../system/result'
import { Content } from '../models/content'

const PageContent = {
  /**
   * List all existing content entries, or only page-specific if page provided
   * @param {string} page
   */
  async list (page = null) {
    try {
      const scope = {}
      if (page !== null) {
        scope.page = page
      }
      result.data = await Content.find(scope)
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  /**
   * Add new content entry
   * @param {object} data
   */
  async add (data) {
    try {
      const content = new Content({
        page: data.page,
        section: data.section,
        content: data.content,
        createdAt: new Date()
      })
      result.data = await content.save()
      result.status = 201
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  /**
   * Update existing content entry
   * @param {string} id
   * @param {object} data
   */
  async update (id, data) {
    try {
      Content.findByIdAndUpdate(id, {
        $set: {
          page: data.page,
          section: data.section,
          content: data.content
        }
      }, {
        new: true
      }, (err, content) => {
        if (err) {
          result.data = err
          result.status = 500
        }
        result.data = content
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
   * @param {string} id
   */
  async remove (id) {
    try {
      Content.findByIdAndRemove(id, (r) => {
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

export default PageContent
