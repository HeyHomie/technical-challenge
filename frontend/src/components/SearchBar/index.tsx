import React, { FunctionComponent } from 'react'

export const SearchBar: FunctionComponent<any> = ({ handleChange }) => {
  return (
    <div className='SearchBar--container'>
      <input
        type='text'
        placeholder='Find a repository'
        onChange={handleChange}
      />
    </div>
  )
}
