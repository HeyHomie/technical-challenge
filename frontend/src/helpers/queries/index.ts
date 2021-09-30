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

const allRepos = gql`
  query ($login: String!) {
    user(login: $login) {
      id
      name
      login
      githubId
      avatarUrl
      url
      repositories {
        name
        htmlUrl
        description
        fullName
      }
    }
  }
`

const filterRepos = gql`
  query ($name: String!, $userId: Int!) {
    repository(name: $name, userId: $userId) {
      name
      htmlUrl
      description
      fullName
    }
  }
`

export { allUsers, allRepos, filterRepos }
