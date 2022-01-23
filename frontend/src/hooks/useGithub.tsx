import { useEffect, useState } from 'react'
import { githubApi } from '../services'

export function useGithub<T>(path: string, parameters?: any) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<T>()

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        const { data } = await githubApi(path, parameters)
        setData(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    getData()
  }, [JSON.stringify(parameters)])

  return { isLoading, error, data }
}
