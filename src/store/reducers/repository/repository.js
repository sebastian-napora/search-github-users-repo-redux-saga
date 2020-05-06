import { RECEIVE_API_REPOSITORIES } from '../../actions/typeActions'

export function repositories (state = {}, { type, data }) {
  switch (type) {
    case RECEIVE_API_REPOSITORIES:
      return { ...state, data }
    default:
      return state;
  }
}
