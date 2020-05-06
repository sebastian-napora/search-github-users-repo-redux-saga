import { RECEIVE_API_USERS } from '../../actions/typeActions'

export function users (state = [], { type, data }) {
  switch (type) {
    case RECEIVE_API_USERS:
      return { ...state, data }
    default:
      return state;
  }
}
