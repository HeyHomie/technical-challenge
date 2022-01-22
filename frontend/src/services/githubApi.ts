export async function githubApi(path: string) {
  const response = await fetch(`https://api.github.com/${path}`)
  const data = await response.json()
  return data
}
