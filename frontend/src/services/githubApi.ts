import querystring, { ParsedUrlQueryInput } from 'querystring'

export async function githubApi(
  path: string,
  parameters?: ParsedUrlQueryInput
) {
  const params = querystring.stringify(parameters)

  const response = await fetch(`https://api.github.com/${path}?${params}`)
  const data = await response.json()
  return data
}
