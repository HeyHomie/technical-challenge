import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import { request, gql } from 'graphql-request'

// This should probably be a .env variable but for demonstration purposes I'm just using a hardcoded value
const endpoint = 'http://localhost:3000/graphql'

const Home: React.FC<IPage> = (props) => {
  const queryClient = useQueryClient()
  const { data, error, isLoading } = useUsers()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>Home</h1>
      <Link to="/MarioDena">Go To Repos</Link>
    </>
  )
}

const useUsers = () => {
  return useQuery('allUsers', async () => {
    const {
      allUsers: { data }
    } = await request(
      endpoint,
      gql`
        query {
          allUsers {
            name
            login
          }
        }
      `
    )
    return data
  })
}

export default Home
