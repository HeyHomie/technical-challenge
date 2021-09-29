import { gql } from 'graphql-request'

const singleUser = gql`
  mutation ($login: String!) {
    createUser(input: { login: $login }) {
      user {
        name
        login
      }
    }
  }
`

export { singleUser }
