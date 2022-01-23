import { githubApi } from '../githubApi'

describe('testing githubApi', () => {
  test('get profile test', async () => {
    const { data } = await githubApi('users/octocat')

    expect(data.login).toBe('octocat')
  })

  test('get profile repositories test', async () => {
    const { data } = await githubApi('users/octocat/repos')

    expect(data.length).toBeGreaterThanOrEqual(1)
  })

  test('get data from cache', async () => {
    const { isCached } = await githubApi('users/octocat')

    expect(isCached).toBe(true)
  })
})

export {}
