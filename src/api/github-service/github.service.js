import Http from '../Http'

export default {
  async get (userName) {
    try {
      const data = await Http.get(`search/users?q=${userName}`)
      return data
    } catch (err) {
      console.log(err)
    }
  },
  async getRepositories (username) {
    try {
      const data = await Http.get(`users/${username}/repos`)
      return data
    } catch (err) {
      console.log(err)
    }
  }
}