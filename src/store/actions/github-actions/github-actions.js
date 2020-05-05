import {
  REQUEST_API_USERS,
  RECEIVE_API_USERS,
  REQUEST_API_REPOSITORIES,
  RECEIVE_API_REPOSITORIES
} from '../typeActions'

export const requestApiCall = userName => ({ type: REQUEST_API_USERS, userName })

export const receiveApiCall = data => ({ type: RECEIVE_API_USERS, data })

export const requestApiCallWithRepositories = userName => ({ type: REQUEST_API_REPOSITORIES, userName })

export const receiveApiCallWithRepositories = data => ({ type: RECEIVE_API_REPOSITORIES, data })
