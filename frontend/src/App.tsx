import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps
} from 'react-router-dom'
import routes from 'config/routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => {
                  return <route.component {...props} {...route.props} />
                }}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
