import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    groups(id: String): [Group]
    skills(id: String): [Skill]
  },
  type Group {
    _id: String
    title: String
    items: [Skill]
    icon: String
    createdAt: String
  },
  type Skill {
    _id: String
    title: String
    value: Int
    group: Group
    createdAt: String
  }
`)

export default schema
