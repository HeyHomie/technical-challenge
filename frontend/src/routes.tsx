import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useParams
} from 'react-router-dom'
import { Layout } from './layout/Layout'

export const AppRouter = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/:username" component={Layout} />
        <Route path="*">
          <Redirect to="/yknx4" />
        </Route>
      </Switch>
    </Layout>
  </Router>
)
