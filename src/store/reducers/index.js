
import { combineReducers } from 'redux';

import github from './github/github';

const rootReducer = combineReducers({
  github
});

export default rootReducer;