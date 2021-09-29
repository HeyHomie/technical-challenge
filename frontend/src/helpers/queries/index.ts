import { gql } from 'graphql-request'

const allUsers = gql`
  query {
    allUsers {
      name
      login
    }
  }
`

export { allUsers }
