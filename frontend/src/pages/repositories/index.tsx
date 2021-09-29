import React, { useEffect, useLayoutEffect } from 'react'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'
import { useGQLMutation } from 'hooks/useGQL'
import { singleUser } from 'helpers/mutations'

const Repositories: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const [user, setUser] = React.useState<string>('')
  useLayoutEffect(() => {
    setUser(props.match.params.user)
  }, [])

  const { mutate, status } = useGQLMutation(singleUser, {
    login: user
  })

  return (
    <>
      <h1>Repositories</h1>
      <p>{status && <div>{JSON.stringify(status)}</div>}</p>
      <Link to="/">Go back</Link>
      <button
        onClick={() => {
          mutate()
        }}>
        Create User
      </button>
    </>
  )
}

export default withRouter(Repositories)
