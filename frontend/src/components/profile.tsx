import './profile.css'
import { Button, Header, Icon, Image } from 'semantic-ui-react'

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
      {org}
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
      <a href={website} target='_blank'>
        {website}
      </a>
    </p>
  </div>
)


const Profile = ( props:any ) => {

  const user = props.user
  
  return (
    <>
      <Image circular size='medium' src={user.avatar_url}/>
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
        { user.bio }
      </p>
      { Stats(user.followers, user.following, 38) }
      { Social(user.company, user.location, user.email, user.blog) }
    </>
  )
}

export default Profile