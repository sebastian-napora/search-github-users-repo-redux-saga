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
  getRepositories (username) {
    return Http.get(`users/${username}/repos`)
  }
}