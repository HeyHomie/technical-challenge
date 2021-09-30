import React, { useEffect } from 'react'
import useDebounce from 'hooks/useDebounce'

import { useGQLQuery } from 'hooks/useGQL'
import { filterRepos } from 'helpers/queries'

const SearchBar: React.FC<ISearchBar> = ({
  updateAction,
  clearAction,
  userId
}) => {
  const [value, setValue] = React.useState('')
  useDebounce(
    () => {
      refetch()
    },
    500,
    [value]
  )
  const {
    data: repos,
    isLoading,
    status,
    refetch
  } = useGQLQuery('filterRepos', filterRepos, {
    name: value,
    userId: userId
  })

  useEffect(() => {
    if (repos) {
      updateAction(repos.repository)
    }
  }, [repos])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="pt-2 flex mt-6 text-gray-600">
      <input
        onChange={(e) => {
          handleChange(e)
        }}
        className="border-2 m-auto border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
        name="search"
        placeholder="Search"
      />
    </div>
  )
}

export default SearchBar
