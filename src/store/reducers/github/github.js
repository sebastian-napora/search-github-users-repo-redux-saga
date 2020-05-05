function github (state = [], { type, data }) {
  switch (type) {
    case 'RECEIVE_API':
      return { ...state, data }
    default:
      return state;
  }
}

export default github;