import { GithubService } from './github-service/github.service'

/**
  * @const services
  * @description This const collected all API services.
*/
const services = {
  repositories: GithubService
}

/**
  * @const takeAllUsers
  * @description This const returned all services by method, like: get, put, etc.
*/
export const ServiceFactory = {
  /**
    * @method GET
    * @description Returned all get method services.
  */
  get: name => services[name]
}