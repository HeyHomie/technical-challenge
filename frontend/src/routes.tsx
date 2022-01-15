import * as React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import CardContainer from './Components/CardContainer/CardContainer'
import Profile from './Components/Profile/Profile'

export const Main: React.FC = () => {
  return (
    <main className='main-container'>
      <aside>
        <Profile />
      </aside>
      <section className='main-content'>
        <CardContainer />
      </section>
    </main>
  )
}

export const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path='/:username' component={Main} />
      <Route path='*'>
        <Redirect to='/yknx4' />
      </Route>
    </Switch>
  </Router>
)
