export const fetchWrapper = async (
  url: string,
  params?: Object,
  { data = null, customHeaders = {}, ...customConfig } = {}
) => {
  let config: Record<string, any> = {
    method: data ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'Content-type': 'application/json',
      ...customHeaders
    }
  }

  if (data) {
    config.body = JSON.stringify(data)
  }

  const getQueryString = (params: Record<string, any>) => {
    let esc = encodeURIComponent
    return Object.keys(params)
      .map((k) => esc(k) + '=' + esc(params[k]))
      .join('&')
  }

  let queryString = params ? `?${getQueryString(params)}` : ''

  return fetch(`${url}${queryString}`, config).then(async (response) => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}
