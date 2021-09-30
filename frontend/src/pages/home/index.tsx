import React, { useLayoutEffect } from 'react'

import { Link } from 'react-router-dom'

// Queries
import { useGQLQuery } from 'hooks/useGQL'
import { allUsers } from 'helpers/queries'

// Components
import { Grid } from 'components/layout'
import { Card, Form, Avatar } from 'components/UI/'
import { Loader } from 'components/UI'

const Home: React.FC<IPage> = (props) => {
  const [users, setUsers] = React.useState<any>()
  const { data, isLoading, refetch } = useGQLQuery('allUsers', allUsers)

  useLayoutEffect(() => {
    if (data) {
      setUsers(data.allUsers)
    }
  }, [data])

  if (isLoading) {
    return (
      <div className="m-auto mt-12">
        <Loader />
      </div>
    )
  }

  // ! this check could be cleaner
  return (
    <>
      <Form action={refetch}></Form>
      {users && users.length > 0 && (
        <>
          <Grid>
            {users.map((user: any) => {
              return (
                <div key={user.id}>
                  <Link to={`/${user.login}`}>
                    <Card>
                      <Avatar
                        url={user.login}
                        nameL={user.name}
                        image={user.avatarUrl}
                      />
                    </Card>
                  </Link>
                </div>
              )
            })}
          </Grid>
        </>
      )}
    </>
  )
}

export default Home
