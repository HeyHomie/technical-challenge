import { IUser, IRepository } from 'types'

const API_URL = 'https://api.github.com'

export const apiFetch = async (url: string) => {
  const res = await fetch(`${API_URL}${url}`)

  const json = await res.json()

  if (res.status !== 200) {
    throw new Error(json.message)
  }

  return json
}
