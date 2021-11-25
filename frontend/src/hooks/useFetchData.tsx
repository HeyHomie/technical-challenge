import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useFetchData: any = () => {
  const apiUrl: string = 'https://api.github.com'
  const { username } = useParams<{ username: string }>()
  const [state, setState] = useState<any>({
    error: false,
    loading: false,
    data: []
  })
  useEffect((): void => {
    const fetchData = async (): Promise<any> => {
      try {
        setState({ ...state, loading: true })
        const responseRepos = await fetch(`${apiUrl}/users/${username}/repos`)
        const dataRepos = await responseRepos.json()
        const responseUser = await fetch(`${apiUrl}/users/${username}`)
        const dataUser = await responseUser.json()

        setState({
          ...state,
          error: false,
          loading: false,
          data: [
            { type: 'repositories', data: dataRepos },
            { type: 'user', data: dataUser }
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
