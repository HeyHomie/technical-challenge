import { gql } from 'graphql-request'

const importUser = gql`
  mutation ($login: String!) {
    createUser(input: { login: $login }) {
      user {
        id
        login
      }
    }
    createRepository(input: { login: $login }) {
      repo {
        name
      }
    }
  }
`

export { importUser }
