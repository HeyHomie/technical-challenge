const fetchUser = async (username:string) => {
  const response = await fetch(`/api/v1/users?username=${username}`)
  return await response.json()
}

const fetchRepos = async (username:string) => {
  const response = await fetch(`/api/v1/users/${username}/repositories`)
  return response.json()
}

export {  fetchUser, fetchRepos }