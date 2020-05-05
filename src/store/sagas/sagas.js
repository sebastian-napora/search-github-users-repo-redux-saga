import { call, put, takeEvery, putResolve } from 'redux-saga/effects'
import { ServiceFactory } from '../../api/ServiceFactory'
import { receiveApiCall, receiveApiCallWithRepositories } from '../actions/github-actions/github-actions'

import {
  REQUEST_API_REPOSITORIES,
  USER_FETCH_FAILED,
  REQUEST_API_USERS
} from '../actions/typeActions'

const repositoriesService = ServiceFactory.get('repositories')

function* getUsers (action) {
  const { userName } = action

  try {
    const users = yield call(repositoriesService.get, userName)
    yield putResolve(receiveApiCall(users.data.items))

  } catch (error) {
    yield put({ type: USER_FETCH_FAILED, message: error.message })
    console.log(error)
  }
}

function* getRepositories (action) {
  const { userName } = action

  try {
    const repositories = yield call(repositoriesService.getRepositories, userName)
    yield putResolve(receiveApiCallWithRepositories(repositories.data))

  } catch (error) {
    yield put({ type: USER_FETCH_FAILED, message: error.message })
    console.log(error)
  }

}

function* mySaga () {
  yield takeEvery(REQUEST_API_USERS, getUsers)
  yield takeEvery(REQUEST_API_REPOSITORIES, getRepositories)
}

export default mySaga