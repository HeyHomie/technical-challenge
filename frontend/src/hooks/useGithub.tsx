import { useEffect, useState } from 'react'
import { githubApi } from '../services'

export function useGithub<T>(path: string) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    async function getData() {
      try {
        const data = await githubApi(path)
        setData(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }

    getData()
  }, [path])

  return { isLoading, error, data }
}
