import groups from './../../controllers/groups.controller'
import skills from './../../controllers/skills.controller'

const resolver = {
  groups: async () => {
    const result = await groups.list()
    return result.data
  },
  skills: async () => {
    const result = await skills.list()
    return result.data
  }
}

export default resolver
