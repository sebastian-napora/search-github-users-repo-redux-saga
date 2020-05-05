import { call, put, takeEvery, takeLatest, select, fork, putResolve, all, take, setContext } from 'redux-saga/effects'
import { ServiceFactory } from '../../api/ServiceFactory'
import { requestApiCall, receiveApiCall, takeUserName, receiveApiCallWithRepositories } from '../actions/githubRepo'
import * as selectors from '../selectors/selectors'

import {
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
  USER_FETCH_REQUESTED,
} from '../actions/typeActions'

const repositoriesService = ServiceFactory.get('repositories')

function* getUsers (action) {
  const { type, userName } = action;
  try {
    const users = yield call(repositoriesService.get, userName);
    yield putResolve(receiveApiCall(users.data.items));

  } catch (error) {
    yield put({ type: USER_FETCH_FAILED, message: error.message });
    console.log(error)
  }

}

// function* getRepositories (action) {

//   const { type, userName } = action;
//   console.log(type, userName);
//   try {
//     // const takeUserName = yield take('REQUEST_API')
//     // console.log(takeUserName)
// const repositories = yield call(repositoriesService.getRepositories, userName);
// yield putResolve(receiveApiCallWithRepositories(repositories.data));

//   } catch (error) {
//     yield put({ type: USER_FETCH_FAILED, message: error.message });
//     console.log(error)
//   }

// }


function* mySaga () {
  yield takeEvery('REQUEST_API', getUsers)
}

export default mySaga;