import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import { ProfilePage } from '../modules'

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/:username" component={ProfilePage} />
      <Route path="*">
        <Redirect to="/yknx4" />
      </Route>
    </Switch>
  </Router>
)
