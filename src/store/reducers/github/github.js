const initialState = {
  users: {},
  repositories: {},
  userName: ""
}

function github (state = initialState, { type, data }) {
  switch (type) {
    case 'RECEIVE_API':
      return { ...state.users, users: data }
    case 'RECEIVE_API_REPOSITORIES':
      return { ...state.repositories, repositories: data }
    // case 'TAKE_USER_NAME':
    //   return { ...state.userName, userName: data }
    default:
      return state;
  }
}

export default github;