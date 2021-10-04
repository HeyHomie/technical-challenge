interface User {
  id: number,
  login: string,
  github_id: number,
  url: string,
  name: string,
  email: string,
  avatar_url: string,
  bio: string,
  company: string,
  location: string,
  blog: string,
  twitter_username: string,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string
}

interface Repository {
  id: number,
  github_id: number,
  url: string,
  name: string,
  user_id: number,
  fork: boolean,
  description: string,
  language: string,
  stars: number,
  forks: number,
  license: string,
  last_updated: string,
  archived: boolean,
  private: boolean,
  created_at: string,
  updated_at: string
}
export type { User, Repository }