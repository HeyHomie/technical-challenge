export interface Profile {
  id: number
  avatar_url: string
  bio: string
  name: string
  login: string
  followers: number
  following: number
  location: string
  email: string
  blog: string
  company: string
  twitter_username: string
  public_repos: number
}

export interface Repository {
  node_id: string
  id: number
  name: string
  fork: boolean
  description: string
  topics: string[]
  language: string
  homepage: string
  stargazers_count: number
  pushed_at: string
}
