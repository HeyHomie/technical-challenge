import React, { useEffect } from 'react'
import { FunctionComponent } from 'react'
import { getInfoUser, selectUser } from './store/slice/api-user'
import { useAppDispatch, useAppSelector } from './store/store'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useParams
} from 'react-router-dom'

export const Main: FunctionComponent = () => {
  const { username } = useParams<{ username: string }>()
  const dispatch = useAppDispatch()

  useEffect((): any => {
    dispatch(getInfoUser(username))
  }, [username])

  const { data } = useAppSelector(selectUser)
  console.log(data)

  return (
    <>
      <h1>{data.user.login}</h1>
    </>
  )
}

export const AppRouter: FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/:username" component={Main} />
      <Route path="*">
        <Redirect to="/yknx4" />
      </Route>
    </Switch>
  </Router>
)
