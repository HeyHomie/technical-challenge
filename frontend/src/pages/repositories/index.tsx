import React, { useLayoutEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

const Repositories: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const [user, setUser] = React.useState<string>('')
  useLayoutEffect(() => {
    setUser(props.match.params.user)
  }, [])

  return (
    <>
      <h1>Repositories</h1>
      <p>{user}</p>
    </>
  )
}

export default withRouter(Repositories)
