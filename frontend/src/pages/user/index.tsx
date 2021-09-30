import React, { useEffect, useLayoutEffect } from 'react'
import { useHistory } from 'react-router'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'

import useDebounce from 'hooks/useDebounce'

// Queries
import { useGQLQuery, useGQLMutation } from 'hooks/useGQL'
import { filterRepos } from 'helpers/queries'
import { getUser } from 'helpers/queries'

// Components
import { Loader, Card, Avatar, Info, SearchBar } from 'components/UI'

const User: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const history = useHistory()
  const [value, setValue] = React.useState('--all')
  const userID = props.match.params.id

  // Filter
  const { data, isLoading, status, refetch } = useGQLQuery(
    'filterRepos',
    filterRepos,
    {
      name: value,
      userId: parseInt(userID)
    }
  )

  // Get user
  const {
    data: userData,
    isLoading: userLoading,
    status: userStatus
  } = useGQLQuery('getUser', getUser, {
    login: props.match.params.user
  })

  // Custom hook to debounce the search
  useDebounce(
    () => {
      refetch()
    },
    500,
    [value]
  )

  // Redirect on error
  if (status === 'error' || userStatus === 'error') {
    history.push('/404')
  }

  if (isLoading || userLoading) {
    return (
      <div className="m-auto mt-12">
        <Loader />
      </div>
    )
  }

  return (
    <>
      {userData && (
        <>
          <Card color="white">
            <>
              <Avatar
                url={userData.user.login}
                nameL={userData.user.name}
                image={userData.user.avatarUrl}
                light
              />
              <SearchBar updateAction={setValue} />
            </>
          </Card>
          {data &&
            data.repository.map((repo: any) => {
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

export default withRouter(User)
