
import { combineReducers } from 'redux'

import { users } from './users-reducer/users-reducer'
import { repositories } from './repository-reducer/repository'

const rootReducer = combineReducers({
  users,
  repositories
})

export default rootReducer