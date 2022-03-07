import React, { useEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useParams
} from 'react-router-dom'
import { Followers } from './views/Followers/Followers'
import { Main } from './views/Main'


export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/:username' component={Main} />
      <Route exact path='/followers/:username' component={Followers} />
      <Route path='*'>
        <Redirect to='/yknx4' />
      </Route>
    </Switch>
  </Router>
)
