import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Profile } from './components/profile/Profile'

export const AppRouter = (): JSX.Element => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/:username' component={Profile} />
        <Route path='*'>
          <Redirect to='/yknx4' />
        </Route>
      </Switch>
    </Layout>
  </Router>
)
