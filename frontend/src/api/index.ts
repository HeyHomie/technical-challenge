import { IUser, IRepository } from 'types'

const API_URL = 'https://api.github.com'

export const getUser = async (username: string): Promise<IUser> => {
  const res = await fetch(`${API_URL}/users/${username}`)

  const json = await res.json()

  if (res.status !== 200) {
    throw new Error(json.message)
  }

  return json
}

export const getRepos = async (username: string): Promise<IRepository[]> => {
  const res = await fetch(`${API_URL}/users/${username}/repos`)
  const json = await res.json()

  if (res.status !== 200) {
    throw new Error(json.message)
  }

  return json
}
