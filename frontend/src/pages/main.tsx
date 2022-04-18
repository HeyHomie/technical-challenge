import React, { useEffect, FunctionComponent } from 'react'
import { useAppDispatch } from '../store/store'
import { getInfoUser } from '../store/slice/api-user'
import { getInfoRepos } from '../store/slice/api-repos'
import { TamplateReposotories } from '../components/template/repositories/index'
import { useParams } from 'react-router'

export const Main: FunctionComponent = () => {
  const { username } = useParams<{ username: string }>()
  const dispatch = useAppDispatch()

  useEffect((): void => {
    dispatch(getInfoUser(username))
    dispatch(getInfoRepos(username))
  }, [username])

  return <TamplateReposotories />
}
