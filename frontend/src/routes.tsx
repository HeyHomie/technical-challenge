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
import UserProfile from './components/user-profile/user-profile'
import { IUserGithub } from './interfaces/user.interface'

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
  const [Repos, setRepos] = useState<Array<any>>([])
  // useEffect(() => {
  //   Promise.all([fetch(`/api/v1/users?username=${username}`), fetch(`/api/v1/users/${username}/repositories`)]).then(async ([user, repos]) => {
  //     setUser(await user.json())
  //     setRepos(await repos.json())
  //   })
  // }, [username])
  return (
    <Layout>
      <UserProfile user={user} />
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
