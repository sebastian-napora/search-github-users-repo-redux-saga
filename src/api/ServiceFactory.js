import GithubService from './github-service/github.service'

const services = {
  repositories: GithubService
}

export const ServiceFactory = {
  get: name => services[name]
}