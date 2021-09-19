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

type stateType = {
  repos: IRepositories[]
  repos_searched: IRepositories[]
  search: string
}

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
  const [user, setUSer] = useState<IUserGithub>(initialState)
  const [page, setPage] = useState<number>(1)
  const [state, setSate] = useState<stateType>({
    repos: [],
    repos_searched: [],
    search: ''
  })

  const baseUrl = 'https://api.github.com'

  async function fetchAPI(endPoint: string) {
    try {
      const response = await fetch(`${baseUrl}${endPoint}`)
      const data = await response.json()
      return data
    } catch (err: unknown) {
      console.log(err)
    }
  }
  /*
    depend if user start to search, the list change the state,
    repos_searched if user search any repo. else use default list.
    repos.
  */
  function listRepos() {
    if (state.repos_searched.length <= 0) {
      return state.repos
    }
    return state.repos_searched
  }

  useEffect(() => {
    Promise.all([
      fetchAPI(`/users/${username}`).then(setUSer),
      fetchAPI(`/users/${username}/repos?page=${page}`).then((repo) =>
        setSate({ ...state, repos: repo })
      )
    ])
  }, [username])

  return (
    <Layout>
      <UserProfile user={user} />
      <Nav total_repos={user.public_repos} />
      <UserContent state={state} setState={setSate}>
        {/* 
          read,  search and list of repos searched length properties,
          and if conditional is true  show message to user. "Repos does find."
          or show repos to match wit user searched.
        */}
        {state.search.length > 0 && state.repos_searched.length <= 0 ? (
          <h1>Does repo find</h1>
        ) : (
          <RepoList repositories={listRepos()} />
        )}
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
