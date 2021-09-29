import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

import { useGQLQuery } from 'hooks/useGQL'
import { allUsers } from 'helpers/queries'

import { Grid } from 'components/layout'
import { Card, SearchBar } from 'components/UI/'

const Home: React.FC<IPage> = (props) => {
  const [users, setUsers] = React.useState<any>()
  const { data, error, isLoading, refetch } = useGQLQuery('allUsers', allUsers)

  useLayoutEffect(() => {
    if (data) {
      setUsers(data.allUsers)
    }
  }, [data])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {users && users.length > 0 ? (
        <>
          <SearchBar></SearchBar>
          <Grid>
            {users.map((user: any) => {
              return (
                <div key={user.id}>
                  <Link to={`/${user.login}`}>
                    <Card
                      url={user.login}
                      nameL={user.name}
                      image={user.avatarUrl}
                    />
                  </Link>
                </div>
              )
            })}
          </Grid>
          <Link to="/MarioDena">Go To Repos</Link>
          <button
            onClick={() => {
              refetch()
            }}>
            Click to Load
          </button>
        </>
      ) : (
        <div>No Users</div>
      )}
    </>
  )
}

export default Home
