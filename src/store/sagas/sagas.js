import { call, put, takeEvery, takeLatest, join, fork, putResolve, all, take, setContext } from 'redux-saga/effects'
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
  const { userName } = action;
  try {
    const users = yield call(repositoriesService.get, userName);
    yield putResolve(receiveApiCall(users.data.items));

  } catch (error) {
    yield put({ type: USER_FETCH_FAILED, message: error.message });
    console.log(error)
  }
}

function* getRepositories (action) {
  // debugger
  const { type, userName } = action;
  console.log(userName);
  // while (true) {
  //   // debugger
  //   const users = yield fork(getUsers)
  //   console.log(users)
  //   if (users) {
  //     try {
  //       const repositories = yield call(repositoriesService.getRepositories, userName);
  //       yield putResolve(receiveApiCallWithRepositories(repositories.data));

  //     } catch (error) {
  //       yield put({ type: USER_FETCH_FAILED, message: error.message });
  //       console.log(error)
  //     }
  //   }
  // }
  try {
    const repositories = yield call(repositoriesService.getRepositories, userName);
    yield putResolve(receiveApiCallWithRepositories(repositories.data));

  } catch (error) {
    yield put({ type: USER_FETCH_FAILED, message: error.message });
    console.log(error)
  }

}

function* allFetched () {
  const fetchUser = yield* getUsers()
  yield put(receiveApiCall(fetchUser))

  const fetchReposirtory = yield* getRepositories()
  yield put(receiveApiCallWithRepositories(fetchReposirtory))
}


function* mySaga () {
  // yield take('REQUEST_API')
  // yield call(getUsers)
  yield takeEvery('REQUEST_API', getUsers)
  yield takeEvery('REQUEST_API_REPOSITORIES', getRepositories)
  // yield take('REQUEST_API_REPOSITORIES')
  // yield call(getRepositories)
  // yield takeEvery('REQUEST_API', allFetched)
}

export default mySaga;