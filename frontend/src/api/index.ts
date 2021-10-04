const fetchUser = async (username:string) => {
  const response = await fetch(`/api/v1/users?username=${username}`)
  return await response.json()
}

const fetchRepos = async (username:string, page: number, query?:string, language?:string, type?:string) => {
  let params:any = {
    page: page
  }

  if (query !== undefined) {
    params['q'] = query
  } else if (language !== undefined) {
    params['language'] = language
  } else if (type !== undefined) {
    params['type'] = type
  }
  
  const response = await fetch(
    `/api/v1/users/${username}/repositories?` +
    new URLSearchParams(params).toString()
  )
  
  return response.json()
}

export {  fetchUser, fetchRepos }