import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface State {
  error: boolean
  loading: boolean
  data: any[]
}

export const useFetchData: any = () => {
  const apiUrl: string = 'https://api.github.com'
  const { username } = useParams<{ username: string }>()
  const [state, setState] = useState<State>({
    error: false,
    loading: true,
    data: []
  })
  useEffect((): void => {
    const fetchData = async (): Promise<any> => {
      try {
        const responseRepos = await fetch(
          `${apiUrl}/users/${username}/repos?sort=updated`
        )
        const dataRepos = await responseRepos.json()
        const responseUser = await fetch(`${apiUrl}/users/${username}`)
        const dataUser = await responseUser.json()

        setState({
          ...state,
          error: false,
          loading: false,
          data: [
            { type: 'repositories', data: dataRepos },
            { type: 'users', data: dataUser }
          ]
        })
      } catch (err) {
        console.log(err)
        setState({
          ...state,
          loading: false,
          error: true
        })
      }
    }

    fetchData()
  }, [username])
  return state
}
