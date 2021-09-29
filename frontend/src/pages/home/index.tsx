import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQueryClient } from 'react-query'

import { useGQLQuery } from 'hooks/useGQL'
import { allUsers } from 'helpers/queries'

const Home: React.FC<IPage> = (props) => {
  //!This is needed do not remove
  const queryClient = useQueryClient()

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
          <h1>
            {users.map((user: any) => {
              return (
                <div key={user.id}>
                  <Link to={`/${user.login}`}>{user.name}</Link>
                </div>
              )
            })}
          </h1>
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
