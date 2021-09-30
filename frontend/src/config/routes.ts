import { Home, NotFound, User } from 'pages'

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/:id/:user',
    name: 'User',
    component: User,
    exact: true
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    exact: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    exact: false
  }
]

export default routes
