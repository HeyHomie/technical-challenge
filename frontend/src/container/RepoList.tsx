import React, { FunctionComponent /* useState */ } from 'react'
import { SearchBar } from '../components/SearchBar'
// import { RepoCard } from '../components/RepoCard'
// import { Loading } from '../components/Loading'
// import { Error } from '../components/Error'

interface Props {
  data: any[]
  loading: boolean
  error: boolean
}

export const RepoList: FunctionComponent<Props> = ({
  data,
  loading,
  error
}) => {
  // const [search, setSearch] = useState<string>('')

  // if (loading) {
  //   return <Loading />
  // }

  // if (error) {
  //   return <Error />
  // }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   const { value } = event.target
  //   setSearch(value)
  // }

  // console.log(search)

  // const { data: repoData } = data.find(
  //   (item: any) => item.type === 'repositories'
  // )

  // const filteredRepos: object[] = repoData.filter((item: any) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // )
  // console.log(filteredRepos)

  return (
    <div className='repoList__container'>
      <SearchBar />
      {/* {filteredRepos.map((item: any) => (
        <RepoCard key={item.id} {...item} />
      ))} */}
    </div>
  )
}
