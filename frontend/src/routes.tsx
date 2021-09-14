import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import { Home } from './pages/Home/Home'

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/:username" component={Home} />
      <Route path="*">
        <Redirect to="/yknx4" />
      </Route>
    </Switch>
  </Router>
)
