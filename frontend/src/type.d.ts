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
  children: any
}

interface IForm {
  action: () => void
}

interface IAvatar {
  image: string
  url: string
  nameL: string
}
