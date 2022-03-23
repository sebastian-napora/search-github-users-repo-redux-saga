import Http from '../Http'

/**
 * @const GithubService
 * @description This Service returned all endpoints to the github API.
*/
export const GithubService = {
  /**
    * @method get
    * @description This method returned matching users from github.
  */
  async get(userName) {
    try {
      return await Http.get(`search/users?q=${userName}&per_page=5`)
    } catch (err) {
      console.log(err)
    }
  },
  /**
    * @method getRepositories
    * @description This method returned repositories matched to the selected user from github.
  */
  async getRepositories(username) {
    try {
      return await Http.get(`users/${username}/repos`)
    } catch (err) {
      console.log(err)
    }
  }
}