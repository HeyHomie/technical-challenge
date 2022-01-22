import querystring, { ParsedUrlQueryInput } from 'querystring'

const cache: any = {}

export async function githubApi(
  path: string,
  parameters?: ParsedUrlQueryInput
) {
  const params = querystring.stringify(parameters)

  const hash = `${path}?${params}`
  if (cache[hash]) {
    console.log('getting data from cache')
    return cache[hash]
  }

  const response = await fetch(`https://api.github.com/${path}?${params}`)
  const data = await response.json()
  cache[hash] = data
  return data
}
