import './footer.css'
import { Divider, Icon, Menu } from 'semantic-ui-react'

const Footer = () => (
  <>
    <Divider />
    <Menu className='gh-footer' >
      <Menu.Item>
        <Icon name='copyright outline' color='grey' />
        <span>2021 GitHub, Inc.</span>
      </Menu.Item>
      <Menu.Item href='https://docs.github.com/en/github/site-policy/github-terms-of-service' target='_blank' name='Terms' />
      <Menu.Item href='https://docs.github.com/en/github/site-policy/github-privacy-statement' target='_blank' name='Privacy' />
      <Menu.Item href='https://github.com/security' target='_blank' name='Secutiry' />
      <Menu.Item href='https://www.githubstatus.com/' target='_blank' name='Status' />
      <Menu.Item href='https://docs.github.com/' target='_blank' name='Docs' />
      <Menu.Item className='grey' href='https://github.com/' target='_blank'>
        <Icon name='github' size='big' color='grey' />
      </Menu.Item>
      <Menu.Item href='https://support.github.com/?tags=dotcom-footer' target='_blank' name='Contact GitHub' />
      <Menu.Item href='https://github.com/pricing' target='_blank' name='Pricing' />
      <Menu.Item href='https://docs.github.com/' target='_blank' name='API' />
      <Menu.Item href='https://services.github.com/' target='_blank' name='Training' />
      <Menu.Item href='https://github.blog/' target='_blank' name='Blog' />
      <Menu.Item href='https://github.com/about' target='_blank' name='About' />
    </Menu>
  </>
)

export default Footer