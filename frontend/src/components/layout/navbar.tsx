import './navbar.css'
import { Icon, Label, Menu } from 'semantic-ui-react'

const Navbar = ( props:any ) => (
  <Menu pointing secondary fixed='top' size='large' className='gh-menu'>
    <Menu.Item link className='gh-item'>
      <Icon color='grey' name='newspaper outline' />
      <span>Overview</span>
    </Menu.Item>
    <Menu.Item link active className='gh-item-active'>
      <Icon color='grey' name='book' />
      <span>Repositories</span>
      <Label color='grey'>{props.count}</Label>
    </Menu.Item>
    <Menu.Item link className='gh-item'>
      <Icon color='grey' name='trello' />
      <span>Projects</span>
    </Menu.Item>
    <Menu.Item link className='gh-item'>
      <Icon color='grey' name='box' />
      <span>Packages</span>
    </Menu.Item>
  </Menu>
)

export default Navbar