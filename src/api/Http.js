import axios from 'axios'

export const baseURL = 'https://api.github.com/'

export default axios.create({
  baseURL
})