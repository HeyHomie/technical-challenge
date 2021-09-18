import React from 'react'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import './user-content.css'

const UserContent: React.FC<{ search: string; setSearch: Function }> = ({
  children
}) => {
  return (
    <main className="main">
      <section className="filter">
        <button className="btn is-green">
          <HiOutlineDesktopComputer size={16} />
          <strong>New</strong>
        </button>
        <form className="filter-content">
          <input
            placeholder="Find a repository..."
            type="search"
            name="search"
            id="search"
          />
          <div className="options">
            <SearchOptions />
          </div>
        </form>
        {/* {search.length > 0 && (
            <p>
              {matchSearched} results for repositories matching with {search}
            </p>
          )} */}
      </section>
      {children}
    </main>
  )
}

const SearchOptions: React.FC = () => {
  // still does not work
  return (
    <>
      <button className="btn is-grey">
        <span>Type</span>
        <IoIosArrowDown />
      </button>
      <button className="btn is-grey">
        <span>Languages</span>
        <IoIosArrowDown />
      </button>
      <button className="btn is-grey">
        <span>Sort</span>
        <IoIosArrowDown />
      </button>
    </>
  )
}

export default UserContent
