
import { combineReducers } from 'redux'

import { users } from './users/users'
import { repositories } from './repository/repository'

const rootReducer = combineReducers({
  users,
  repositories
})

export default rootReducer