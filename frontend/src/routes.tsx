import React, { useLayoutEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useParams
} from 'react-router-dom'

export const Main: FunctionComponent = () => {
  const {username} = useParams<{username: string}>()
  const [User, setUser] = useState<any>({})
  useLayoutEffect(() => {
    fetch(`/api/v1/users?username=${username}`).then(async (user) => {
      setUser(await user.json())
    })
  }, [username])
  if (User.repositories === undefined)  return <div>Loading...</div>

  return (
    <>
    <h1>{User.name}</h1>
    {User.repositories.map((repo: any) => <h2>{repo.name}</h2>)}
    </>
  )
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
