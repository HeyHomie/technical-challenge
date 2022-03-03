export const getUserInfo = async (user: string) => {
  const url = `https://api.github.com/users/${encodeURI(user)}?`
  const resp: any = await fetch(url)
  return await resp.json();
}

export const getRespositories = async (user: string) => {
  const url = `https://api.github.com/users/${encodeURI(
    user
  )}/repos?type=owner&sort=updated&direction=desc&page=1`
  const resp:any=await fetch(url);
  return await resp.json();
}
