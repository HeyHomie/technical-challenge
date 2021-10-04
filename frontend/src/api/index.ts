const fetchUser = async (username:string) => {
  const response = await fetch(`/api/v1/users?username=${username}`)
  return await response.json()
}

const fetchRepos = async (username:string, page: number, filters?:any) => {
  let params:any = {
    page: page
  }

  if (filters !== undefined) {
    if (filters.query !== undefined) {
      if (filters.query === '') {
        delete params.query
      } else {
        params['q'] = filters.query
      }
    }
    if (filters.language !== undefined) {
      if (filters.language === '') {
        delete params.language
      } else {
        params['language'] = filters.language
      }
    }
    if (filters.type !== undefined) {
      if (filters.type === '') {
        delete params.type
      } else {
        params['type'] = filters.type
      }
    }
    if (filters.sort !== undefined) {
      if (filters.sort === '') {
        delete params.sort
      } else {
        params['sort'] = filters.sort
      }
    }
  }

  const response = await fetch(
    `/api/v1/users/${username}/repositories?` +
    new URLSearchParams(params).toString()
  )
  
  return response.json()
}

export {  fetchUser, fetchRepos }