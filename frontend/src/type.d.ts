interface IRoute {
  path: string
  name: string
  component: any
  exact: boolean
  component: any
  props?: any
}

interface IPage {
  name: string
}

interface IProps {
  children: any
}

interface ICard {
  url: string
  nameL: string
  image: string
}
