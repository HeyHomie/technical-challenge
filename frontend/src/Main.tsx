import { Grid } from 'semantic-ui-react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { fetchUser, fetchRepos } from './api'
import { User, Repository } from './interfaces'
import {Loader, Repo, Profile, Footer, Navbar} from './components'


const RepoList = (repos:Repository[]) => {
  return repos.map( (repo:any) => (
    <div key={repo.id}>
      <Repo repo={repo}/>
    </div>
  ))
}

const Main = () => {
  
  const {username} = useParams<{username: string}>()

  const [user, setUser] = useState<User>()
  const [count, setCount] = useState<number>(0)
  const [repos, setRepos] = useState<Array<Repository>>([])

  useEffect(() => {
    fetchUser(username).then(setUser)
  }, [username])

  useEffect(() => {
    if (user) {
      fetchRepos(username).then(( res ) => {
        setRepos(res.repositories)
        setCount(res.total_count)
        document.title = `${username} (${user?.name}) / Repositories`
      })
    }
  }, [user])
  
  if (user === undefined || repos.length === 0) {
    return (
      <div className='content'>
        <Loader />
      </div>
    )
  } else {
    return (
      <div className='content'>
        <Navbar count={count}/>
          <div style={{marginTop: '5em'}}>
            <Grid stackable>
              <Grid.Row centered>
                <Grid.Column width={4}>
                  <Profile user={user} />
                </Grid.Column>
                <Grid.Column width={10}>
                  { RepoList(repos) }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Main