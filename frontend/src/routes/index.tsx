import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ProfileView } from '../views'

export const AppRouter = () => (
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <Switch>
        <Route exact path="/:username" component={ProfileView} />
        <Route path="*">
          <Redirect to="/yknx4" />
        </Route>
      </Switch>
    </QueryParamProvider>
  </Router>
)
