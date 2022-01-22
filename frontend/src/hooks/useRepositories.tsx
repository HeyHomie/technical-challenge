import { useEffect, useState } from 'react'
import { Repository } from '../interfaces'
import { githubApi } from '../services'

interface Parameters {
  page?: number
  query?: string
  language?: string
  type?: string
  direction?: string
  sort?: string
}

export function useRepositories(username: string, parameters: Parameters) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<Repository[]>([])

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        const { page, query, language, type, direction, sort } = parameters

        let data: Repository[] = await githubApi(`users/${username}/repos`, {
          type,
          sort,
          direction,
          page
        })

        if (query) {
          data = data.filter((repo) => repo.name.includes(query.toLowerCase()))
        }

        if (language !== 'all') {
          data = data.filter(
            (repo) => (repo.language || '').toLowerCase() === language
          )
        }

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
