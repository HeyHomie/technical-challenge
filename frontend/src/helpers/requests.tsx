const apiUrl = 'https://api.github.com/'

export const getUserInfo = async (user: string) => {
  const url = `${apiUrl}users/${encodeURI(user)}?`
  const resp: any = await fetch(url)
  return await resp.json()
}

export const getRespositories = async (user: string) => {
  const url = `${apiUrl}users/${encodeURI(
    user
  )}/repos?type=owner&sort=updated&direction=desc&page=1`
  const resp: any = await fetch(url)
  return await resp.json()
}

export const getFollowers = async (user: string) => {
  const url = `${apiUrl}users/${encodeURI(user)}/followers`
  const resp: any = await fetch(url)
  return await resp.json()
}
