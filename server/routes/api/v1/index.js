import _ from 'lodash'
import express from 'express'
import requireContext from 'require-context'

const api = express.Router()
// require context module is buggy and looks in /node_modules/require-context folder,
// so we need to navigate to needed folder blindfolded :[
const requireModule = requireContext('../../server/routes/api/v1', true, /\.js$/)

requireModule.keys().forEach(fileName => {
  // skip this file
  if (fileName === 'index.js') return

  const moduleName = _.kebabCase(fileName.replace(/(\.\/|\.js)/g, ''))
  const module = requireModule(fileName).default

  api.use('/' + moduleName, module)
})

export default api
