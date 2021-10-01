import { fetchUser, fetchRepos } from './api/index'
import { User, Repository } from './interfaces/index'
import { useEffect, useState, FunctionComponent } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useParams
} from 'react-router-dom'

export const Main: FunctionComponent = () => {

  const {username} = useParams<{username: string}>()
  const [User, setUser] = useState<User>()
  const [Repos, setRepos] = useState<Array<Repository>>([])

  useEffect(() => {
    fetchUser(username).then(setUser)
  }, [username])

  useEffect(() => {
    fetchRepos(username).then(setRepos)
  }, [User])

  const getRepoList = () => (
    <>
      {
        Repos.map((repo: any) => (
          <div key={repo.id}>
            <a href={repo.html_url}>{repo.name} - Stars: {repo.stars}</a>
          </div>
        ))
      }
    </>
  )

  if ( User === undefined || Repos === undefined )  {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <h1>{ User?.name }</h1>
        { getRepoList() }
      </>
    )
  }
}

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/:username' component={Main} />
      <Route path='*'>
        <Redirect to='/yknx4' />
      </Route>
    </Switch>
  </Router>
)
