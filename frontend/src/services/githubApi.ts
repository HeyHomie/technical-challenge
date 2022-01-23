import querystring, { ParsedUrlQueryInput } from 'querystring'

const cache: any = {}

export async function githubApi<T = any>(
  path: string,
  parameters?: ParsedUrlQueryInput
): Promise<{
  data: T
  isCached: boolean
}> {
  const params = querystring.stringify(parameters)
  const hash = `${path}?${params}`

  if (cache[hash]) {
    return { isCached: true, data: cache[hash] }
  }

  const response = await fetch(`https://api.github.com/${path}?${params}`)
  const data = (await response.json()) as T
  cache[hash] = data

  return { isCached: false, data }
}
