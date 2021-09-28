import { Home, Repositories } from 'pages'

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: Repositories,
    exact: true
  }
]

export default routes
