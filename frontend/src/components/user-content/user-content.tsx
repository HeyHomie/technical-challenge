import React from 'react';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import './user-content.css';

const UserContent: React.FC<any> = ({ state, setState, children }) => {
  const [search, setSearch] = React.useState<string>('');

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    /* 
      handle input change
      and get repositories was do it match with user searched
    */
    const value = event.currentTarget.value.toLowerCase();
    setSearch(value);
    setState({
      ...state,
      search: value,
      repos_searched: state.repos.filter((repo: any) =>
        repo.name.toLowerCase().includes(value)
      ),
    });
  }

  return (
    <main className="main">
      <section className="filter">
        <button className="btn is-green">
          <HiOutlineDesktopComputer size={16} />
          <strong>New</strong>
        </button>
        <form className="filter-content" onSubmit={handleSubmit}>
          <input
            placeholder="Find a repository..."
            type="search"
            name="search"
            id="search"
            value={search}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <div className="options">
            <SearchOptions />
          </div>
        </form>
        {search.length > 0 && (
          <p>
            {state.repos_searched.length} results for repositories matching with
            {search}
          </p>
        )}
      </section>
      {children}
    </main>
  );
};

const SearchOptions: React.FC<any> = ({ setState, state }) => {
  //  still does not work
  return (
    <>
      <div className="menu">
        <button className="btn is-grey">
          <span>Type</span>
          <IoIosArrowDown />
        </button>
      </div>
      <button className="btn is-grey">
        <span>Languages</span>
        <IoIosArrowDown />
      </button>
      <button className="btn is-grey">
        <span>Sort</span>
        <IoIosArrowDown />
      </button>
    </>
  );
};

export default UserContent;
