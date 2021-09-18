import React, { useEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useParams
} from 'react-router-dom'
import Layout from './components/layout/layout'
import Nav from './components/nav/nav'
import RepoList from './components/repo-list/repo-list'
import UserContent from './components/user-content/user-content'
import UserProfile from './components/user-profile/user-profile'
import { IUserGithub } from './interfaces/user.interface'
import { IRepositories } from './interfaces/repositories.interface'
import Footer from './components/footer/footer'

export const Main: FunctionComponent = () => {
  const initialState: IUserGithub = {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: null,
    company: null,
    blog: '',
    location: '',
    email: null,
    hireable: null,
    bio: null,
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: new Date(),
    updated_at: new Date()
  }

  const { username } = useParams<{ username: string }>()
  const [user, setUser] = useState<IUserGithub>(initialState)
  const [repos, setRepos] = useState<IRepositories[]>([])
  const [search, setSearch] = useState<IRepositories[]>([])
  const [repoSearched, setRepoSearched] = useState<string>('')

  const baseUrl = 'https://api.github.com'

  async function fetchAPI(endPoint: string) {
    try {
      const response = await fetch(`${baseUrl}${endPoint}`)
      const data = await response.json()
      return data
    } catch (err: any) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    Promise.all([
      fetchAPI(`/users/${username}`)
        .then(setUser)
        .catch((err) => console.log(err)),
      fetchAPI(`/users/${username}/repos`)
        .then(setRepos)
        .catch((err) => console.log(err))
    ])
  }, [username])

  return (
    <Layout>
      <UserProfile user={user} />
      <Nav total_repos={10} />
      <UserContent search={repoSearched} setSearch={setRepoSearched}>
        <RepoList repositories={repos} />
      </UserContent>
      <Footer />
    </Layout>
  )
}

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/:username" component={Main} />
      <Route path="*">
        <Redirect to="/yknx4" />
      </Route>
    </Switch>
  </Router>
)
