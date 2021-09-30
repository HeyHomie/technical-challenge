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
  color?: string
}

interface IForm {
  action: () => void
}

interface IAvatar {
  image: string
  url: string
  nameL: string
  light?: boolean
}

interface IInfo {
  title: string
  description: string
  link: string
  fullname: string
}

interface ISearchBar {
  updateAction: (value: any) => void
  clearAction: () => void
  userId: number
}
