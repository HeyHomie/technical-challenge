import './loader.css'
import { Header, Icon } from "semantic-ui-react";

const Loader = () => (
  <div className='loader'>
    <Icon loading name='asterisk' size='massive' />
    <Header as='h1'>Loading...</Header>
  </div>
)

export default Loader