import { Grid } from 'semantic-ui-react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { fetchUser, fetchRepos } from './api'
import { User, Repository } from './interfaces'
import {Loader, Repo, Paginator, Profile, Footer, Navbar} from './components'


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
  const [pageInfo, setPageInfo] = useState<any>()
  const [repos, setRepos] = useState<Array<Repository>>([])

  useEffect(() => {
    fetchUser(username).then(setUser)
  }, [username])

  useEffect(() => {
    if (user) {
      fetchRepos(username).then(( res ) => {
        setRepos(res.repositories)
        setPageInfo({
          page: res.page,
          perPage: res.per_page,
          totalCount: res.total_count,
          totalPages: res.total_pages
        })
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
        <Navbar count={pageInfo?.totalCount}/>
          <div style={{marginTop: '5em'}}>
            <Grid stackable>
              <Grid.Row centered>
                <Grid.Column width={4}>
                  <Profile user={user} />
                </Grid.Column>
                <Grid.Column width={10}>
                  { RepoList(repos) }
                  <Paginator activePage={pageInfo?.activePage} totalPages={pageInfo?.totalPages} onPageChange={() => {alert('GG')}}/>
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