import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

import { useGQLQuery } from 'hooks/useGQL'
import { allUsers } from 'helpers/queries'

import { Grid } from 'components/layout'
import { Card, SearchBar, Form } from 'components/UI/'

const Home: React.FC<IPage> = (props) => {
  const [users, setUsers] = React.useState<any>()
  const { data, isLoading, refetch } = useGQLQuery('allUsers', allUsers)

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
          <Form action={refetch}></Form>
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
        </>
      ) : (
        <div>
          <p className="text-center pt-4 text-gray-700">
            Add a new Developer to the database
          </p>
          <Form action={refetch}></Form>
        </div>
      )}
    </>
  )
}

export default Home
