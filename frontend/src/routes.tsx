import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import { Userpage } from './pages/User/Userpage'

export const AppRouter = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path='/:username' component={Userpage} />
      <Route path='*'>
        <Redirect to='/yknx4' />
      </Route>
    </Switch>
  </Router>
)
