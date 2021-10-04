import './profile.css'
import { Button, Divider, Header, Icon, Image } from 'semantic-ui-react'

const Stats = (followers:number, following:number, stars:number) => (
  <>
    <span className='stats'>
      <Icon name='users' />
      <span className='number'>
        {' ' + followers + ' '}
      </span>
      {' followers'}
    </span>
    <span className='stats'>
      {' '}
      <span className='number'>
        {following}
      </span>
      {' following '}
    </span>
    <span className='stats'>
      <Icon name='star outline' />
      <span className='number'>
        {stars}
      </span>
    </span>
  </>
)

const Social = (org:string, location:string, email:string, website:string) => (
  <div className='social-container'>
    <p className='social'>
      <Icon name='building outline' />
      <a href=''>
        {org}
      </a>
    </p>
    <p className='social'>
      <Icon name='map marker alternate' />
      {location}
    </p>
    <p className='social'>
      <Icon name='mail outline' />
      <a href={'mailto:' + email}>
        {email}
      </a>
    </p>
    <p className='social'>
      <Icon name='chain' />
      <a href={website}>
        {website}
      </a>
    </p>
  </div>
)


const Profile = ( props:any ) => {

  const user = props.user
  
  return (
    <>
      <Image src={user.avatar_url} size='medium' circular />
      <Header as="h2">
        { user.name }
      </Header>
      <Header as="h3">
        { user.login }
      </Header>
      <Button fluid>
        Follow
      </Button>
      <p className='bio'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id laudantium delectus placeat veniam consectetur est molestiae similique a. Totam ea voluptates ipsum est. Ratione pariatur possimus nam sint commodi?
      </p>
      { Stats(35,9,38) }
      { Social('@HeyHomie', 'Mexico', user.email, 'https://ale.world/') }
      <Divider />
    </>
  )
}

export default Profile