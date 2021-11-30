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

export const getRepos = async ({
  username = '',
  per_page = 30,
  page = 1,
  sort = 'pushed'
}): Promise<IRepository[]> => {
  const res = await fetch(
    `${API_URL}/users/${username}/repos?per_page=${per_page}&page=${page}&sort=${sort}`
  )
  const json = await res.json()

  if (res.status !== 200) {
    throw new Error(json.message)
  }

  return json
}
