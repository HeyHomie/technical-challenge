import Main from './Main'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/:username' component={Main} />
      <Route path='*'>
        <Redirect to='/yknx4' />
      </Route>
    </Switch>
  </Router>
)

export default AppRouter