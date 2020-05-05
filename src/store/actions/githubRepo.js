export const requestApiCall = userName => ({ type: "REQUEST_API", userName })
export const requestApiCallWithRepositories = userName => ({ type: "REQUEST_API_REPOSITORIES", userName })
export const receiveApiCall = data => ({ type: "RECEIVE_API", data })
export const receiveApiCallWithRepositories = data => ({ type: "RECEIVE_API_REPOSITORIES", data })
export const takeUserName = userName => {
  debugger
  return ({ type: "TAKE_USER_NAME", userName })
}
