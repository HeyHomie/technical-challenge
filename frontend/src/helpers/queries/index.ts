import { gql } from 'graphql-request'

const allUsers = gql`
  query {
    allUsers {
      id
      name
      login
      githubId
      avatarUrl
      url
    }
  }
`

export { allUsers }
