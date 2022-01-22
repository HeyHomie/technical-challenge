import { useParams } from 'react-router-dom'
import { useQueryParam } from 'use-query-params'
import { Container, Layout, Nav, RepositoriesTab, SideBar } from '../components'
import { useGithub } from '../hooks'
import { Profile, Repository } from '../interfaces'

export function ProfileView() {
  const [tab] = useQueryParam('tab')
  const { username } = useParams<{ username: string }>()

  const { data, isLoading } = useGithub<Profile>(`users/${username}`)

  if (isLoading || !data) {
    return <div>isLoading</div>
  }

  return (
    <Layout>
      <Nav
        repositoriesCount={data.public_repos}
        startsCount={data.public_repos}
      />
      <Container>
        <div className="grid gap-3 grid-cols-4">
          <div className="-mt-[32px]">
            <SideBar profile={data} />
          </div>
          <div className="col-span-3 ml-3">
            {tab === 'repositories' && <RepositoriesTab />}
          </div>
        </div>
      </Container>
    </Layout>
  )
}
