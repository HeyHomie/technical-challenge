import React from 'react'

const SearchBar: React.FC<ISearchBar> = ({ updateAction }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateAction(e.target.value)
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
