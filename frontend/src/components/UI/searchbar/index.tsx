import React, { useRef } from 'react'

const SearchBar = () => {
  return (
    <div className="pt-2 flex mr-auto text-gray-600">
      <input
        className="border-2 ml-auto border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
  )
}

export default SearchBar
