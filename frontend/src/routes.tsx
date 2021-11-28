import { useEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useParams
} from 'react-router-dom'
import { Layout } from 'components/common'
import { getUser, getRepos } from 'api'

export const Main: FunctionComponent = () => {
  const { username } = useParams<{ username: string }>()
  const [User, setUser] = useState<any>({})
  const [Repos, setRepos] = useState<Array<any>>([])

  useEffect(() => {
    Promise.all([getUser(username), getRepos(username)]).then(
      ([user, repos]) => {
        setUser(user)
        setRepos(repos)
      }
    )
  }, [username])

  if (!User || !Repos) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>{User.login}</h1>
      {Repos.map((r) => (
        <h2 key={r.id}>{r.name}</h2>
      ))}
    </>
  )
}

export const AppRouter = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/:username" component={Main} />
        <Route path="*">
          <Redirect to="/yknx4" />
        </Route>
      </Switch>
    </Layout>
  </Router>
)
