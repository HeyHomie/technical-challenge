import React, { useEffect, useLayoutEffect } from 'react'
import { useHistory } from 'react-router'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'

// Queries
import { useGQLQuery, useGQLMutation } from 'hooks/useGQL'
import { allRepos } from 'helpers/queries'

// Components
import { Loader, Card, Avatar, Info, SearchBar } from 'components/UI'

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
          <Card color="white">
            <>
              <Avatar
                url={user.login}
                nameL={user.name}
                image={user.avatarUrl}
                light
              />
              <SearchBar
                updateAction={setRepos}
                clearAction={updateUser}
                userId={parseInt(user.id)}
              />
            </>
          </Card>
          {repos.map((repo: any) => {
            return (
              <div key={repo.id}>
                <Card>
                  <Info
                    title={repo.name}
                    description={repo.description}
                    link={repo.htmlUrl}
                    fullname={repo.fullName}
                  />
                </Card>
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
