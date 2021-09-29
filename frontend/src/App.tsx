import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps
} from 'react-router-dom'
import routes from 'config/routes'

//Layout
import Main from 'components/layout/main'

// Client for the GraphQL API using react-query to handle the caching
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Main>
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
          </Main>
        </BrowserRouter>
        {/* React query tools if this bothers you you can simply delete this line */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
