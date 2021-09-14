import { fetchWrapper } from '../utils/api-client'
import Constants from '../constants/Constants'

export function getRepositoriesByUser(username: string, sort: string) {
  let params = { sort }
  return fetchWrapper(
    `${Constants.environment.api.server}/users/${username}/repos`,
    params
  )
}
