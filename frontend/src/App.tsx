import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import Main from './Components/Main'

const App = () =>(
  <Router>
  <Switch>
    <Route exact path='/:username' component={Main} />
    <Route path='*'>
      <Redirect to='/davidmariolc' />
    </Route>
  </Switch>
</Router>
)

export default App
