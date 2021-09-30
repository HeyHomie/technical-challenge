import React from 'react'

// Styles
import * as styles from './styles'

const SearchBar: React.FC<ISearchBar> = ({ updateAction }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateAction(e.target.value)
  }

  return (
    <div className={styles.INPUT_CONTAINER}>
      <input
        onChange={(e) => {
          handleChange(e)
        }}
        className={styles.INPUT}
        name="search"
        placeholder="Search"
      />
    </div>
  )
}

export default SearchBar
