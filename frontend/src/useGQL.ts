import { useQuery, useMutation } from 'react-query'
import { GraphQLClient } from 'graphql-request'

// This should probably be an .env variable but for demonstration purposes
// I'm just using a hardcoded value
const endpoint = 'http://localhost:3000/graphql'

const graphQLClient = new GraphQLClient(endpoint)

export const useGQLQuery = (
  key: string,
  query: any,
  variables?: any,
  config = {}
) => {
  const fetchData = async () => await graphQLClient.request(query, variables)
  return useQuery(key, fetchData, config)
}

export const useGQLMutation = (query: any, variables?: any) => {
  const mutateData = async () => await graphQLClient.request(query, variables)

  return useMutation(mutateData)
}
