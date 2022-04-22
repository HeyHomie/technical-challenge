import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { About } from './components/about';
import Main from './Main';
import Repos from './Repos';


export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to='/user/yknx4' />
      </Route>
      <Route exact path='/user/:username' component={Main} />
      <Route exact path="/repos/:reponame" component={Repos} />
      <Route path='/about' component={About}/>
    </Switch>
  </Router>
)