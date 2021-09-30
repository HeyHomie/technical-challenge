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
  const { data, isLoading, refetch } = useGQLQuery('allUsers', allUsers)

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
      {data && data.allUsers.length > 0 && (
        <>
          <Grid>
            {data.allUsers.map((user: any) => {
              return (
                <div key={user.id}>
                  <Link to={`/${user.id}/${user.login}`}>
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
