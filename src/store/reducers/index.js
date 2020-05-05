
import { combineReducers } from 'redux';

import github from './github/github';
import repositories from './repository-reducer/repository'

const rootReducer = combineReducers({
  github,
  repositories
});

export default rootReducer;