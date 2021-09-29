import { Home, Repositories } from 'pages'

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/:user',
    name: 'Repositories',
    component: Repositories,
    exact: true
  }
  // {
  //   path: '*',
  //   name: 'NotFound',
  //   component: () => <div>Not Found</div>,
  //   exact: false
  // }
]

export default routes
