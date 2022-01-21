import * as React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import Repositories from './Components/Repositories/Repositories'
import Profile from './Components/Profile/Profile'
import Tabs from './Components/Tabs/Tabs'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

export const Main: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className='tabs-desktop__container'>
        <Tabs />
      </div>
      <main className='main-container'>
        <aside>
          <Profile />
        </aside>
        <section className='main-content'>
          <Repositories />
        </section>
      </main>
      <Footer />
    </>
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
