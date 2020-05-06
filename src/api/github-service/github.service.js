import Http from '../Http'

export default {
  async get (userName) {
    try {
      return await Http.get(`search/users?q=${userName}&per_page=5`)
    } catch (err) {
      console.log(err)
    }
  },
  async getRepositories (username) {
    try {
      return await Http.get(`users/${username}/repos`)
    } catch (err) {
      console.log(err)
    }
  }
}