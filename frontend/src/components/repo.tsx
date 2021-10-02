import './repo.css'
import { Button, Divider, Grid, Header, Icon, Label } from 'semantic-ui-react'

const Title = (name:string, archived:boolean) => (
  <div className='title-container'>
    <Header as='a' href='/' target='_blank' className='repo'>
      {name}
    </Header>
    <Label circular size='small' color='grey'>
      { archived ? 'Archived' : 'Public' }
    </Label>
  </div>
)

const Forked = (fork:boolean) => {
  if (fork) {
    return (
      <p className='forked'> 
        Forked form /parent/
      </p>
    )
  } else {
    return null
  }
}

const Desc = (desc?:string) => {
  if (desc) {
    return (
      <p className='desc'>
        {desc}
      </p>
    )
  } else {
    return null 
  }
}

const Details = (last_updated:string, forks:number, lang?:string, lic?:string ) => {

  let formatted_date = new Date(last_updated).toLocaleDateString(
    'en-US', 
    {day: 'numeric', month: 'short'}
  )  

  return (
    <div className='details-container'>
      { lang ? (
        <div className='details-item'>
          {/* TODO: Get color of languaje */}
          <Label circular color='red'/>
          <span>{lang}</span>
        </div>
      ) : null }
      { forks > 0 ? (
        <div className='details-item'>
          <Icon name='fork'/>
          <span>{forks}</span>
        </div>
      ) : null }
      { lic ? (
        <div className='details-item'>
          <Icon name='balance'/>
          <span>{lic}</span>
        </div>
      ) : null }
      <div className='details-item'>
        <span>Updated on {formatted_date}</span>
      </div>
    </div>
  )
}

const Repo = ( props:any ) => {

  let repo = props.repo
  
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            { Title(repo.name, repo.archived) }
            { Forked(repo.fork) }
            { Desc(repo.desc) }
            { Details(repo.last_updated, repo.forks, repo.language, repo.license) }
          </Grid.Column>
          <Grid.Column width={8} floated='right'>
            <Button compact size='small' floated='right'>
              <Icon name='star outline'/>
              <span>Star</span>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </div>
  )
}

export default Repo