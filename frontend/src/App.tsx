import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import Main from './Main'

import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/:username' component={Main} />
        <Route path='*'>
          <Redirect to='/yknx4' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
