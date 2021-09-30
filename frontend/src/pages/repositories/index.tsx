import React, { useEffect, useLayoutEffect } from 'react'
import { useHistory } from 'react-router'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'

// Queries
import { useGQLQuery } from 'hooks/useGQL'
import { allRepos } from 'helpers/queries'

// Components
import { Loader, Card, Avatar } from 'components/UI'

const Repositories: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const [user, setUser] = React.useState<any>(null)
  const [repos, setRepos] = React.useState<any>(null)
  const history = useHistory()
  const {
    data: userData,
    isLoading,
    status,
    refetch: updateUser
  } = useGQLQuery('allRepos', allRepos, {
    login: props.match.params.user
  })

  useLayoutEffect(() => {
    if (userData) {
      setUser(userData.user)
      setRepos(userData.user.repositories)
      console.log(userData.user.repositories)
    }
  }, [userData])

  if (status === 'error') {
    history.push('/404/404')
  }

  if (isLoading) {
    return (
      <div className="m-auto mt-12">
        <Loader />
      </div>
    )
  }

  return (
    <>
      {repos && (
        <>
          <Card>
            <Avatar url={user.login} nameL={user.name} image={user.avatarUrl} />
          </Card>
          {repos.map((repo: any) => {
            return (
              <div key={repo.id}>
                <Link to={`/repositories/${user}/${repo.name}`}>
                  {repo.name} {repo.htmlUrl} {repo.description} {repo.fullName}
                </Link>
              </div>
            )
          })}
        </>
      )}
      <Link to="/">Go back</Link>
    </>
  )
}

export default withRouter(Repositories)
