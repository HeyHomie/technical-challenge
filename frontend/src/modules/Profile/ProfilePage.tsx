import { useParams } from 'react-router-dom'
import { Container, Layout, Nav, SideBar } from '../../components'
import { useGithub } from '../../hooks'
import { Profile } from './interface'
import { Repositories } from './Repositories'

export function ProfilePage() {
  const { username } = useParams<{ username: string }>()
  const { isLoading, data: profile } = useGithub<Profile>(`users/${username}`)

  if (isLoading || !profile) {
    return <div>isLoading</div>
  }

  return (
    <Layout>
      <Nav repositoriesCount={87} startsCount={23} />
      <Container>
        <div className="grid gap-3 grid-cols-4">
          <div className="-mt-[32px]">
            <SideBar profile={profile} />
          </div>
          <div className="col-span-3 ml-3">
            <Repositories />
          </div>
        </div>
      </Container>
      sdfsdffds<h1 className="text-3xl font-bold underline">{profile.name}</h1>
    </Layout>
  )
}
