import React, { useEffect, FunctionComponent } from 'react'
import { getInfoRepos, selectRepos } from './store/slice/api-repos'
import { useAppDispatch, useAppSelector } from './store/store'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useParams
} from 'react-router-dom'
import { NavRepos } from './components/organisms/nav'

export const Main: FunctionComponent = () => {
  const { username } = useParams<{ username: string }>()
  const dispatch = useAppDispatch()

  useEffect((): void => {
    // dispatch(getInfoUser(username))
    dispatch(getInfoRepos(username))
  }, [username])

  const { data } = useAppSelector(selectRepos)
  console.log(data)

  return (
    <>
      {/* <h1>data.user.login</h1> */}
      <NavRepos />
    </>
  )
}

export const AppRouter: FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact path='/:username' component={Main} />
      <Route path='*'>
        <Redirect to='/yknx4' />
      </Route>
    </Switch>
  </Router>
)
