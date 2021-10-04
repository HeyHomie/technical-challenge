import { Grid } from 'semantic-ui-react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { fetchUser, fetchRepos } from './api'
import { User, Repository } from './interfaces'
import {Loader, Repo, Profile, Footer, Navbar} from './components'


const RepoList = (repos:Repository[]) => {
  return repos.map( (repo:any) => (
    <div className={repo.id}>
      <Repo repo={repo}/>
    </div>
  ))
}

const Main = () => {
  
  const {username} = useParams<{username: string}>()

  const [user, setUser] = useState<User>()
  const [repos, setRepos] = useState<Array<Repository>>([])

  useEffect(() => {
    fetchUser(username).then(setUser)
  }, [username])

  useEffect(() => {
    fetchRepos(username).then(setRepos)
  }, [user])
  
  if (user === undefined) {
    return (
      <div className='content'>
        <Loader />
      </div>
    )
  } else {
    return (
      <div className='content'>
        <Navbar />
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={4}>
                <Profile user={user} />
              </Grid.Column>
              <Grid.Column width={10}>
                { RepoList(repos) }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        <Footer />
      </div>
    )
  }
}

export default Main