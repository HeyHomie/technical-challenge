import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import { Userpage } from './pages/User'
import { Layout } from './components/Layout'

export const AppRouter = (): JSX.Element => (
  <Router>
    <Layout>
      <Switch>
        <div className='body-container'>
          <Route exact path='/:username' component={Userpage} />
          <Route path='*'>
            <Redirect to='/yknx4' />
          </Route>
        </div>
      </Switch>
    </Layout>
  </Router>
)
