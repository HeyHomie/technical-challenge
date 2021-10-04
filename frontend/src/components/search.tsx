import './search.css'
import { useEffect, useState } from 'react'
import { Divider, Dropdown, Grid, Input } from 'semantic-ui-react'

const Filters = ( handleTypeChange:any, handleLangChange:any, handleOrderChange:any ) => {

  const types = [
    {key: '' , value: '', text: 'All'},
    {key: 'forks' , value: 'forks', text: 'Forks'},
    {key: 'archived' , value: 'archived', text: 'Archived'},
  ]

  const langs = [
    {key: '' , value: '', text: 'All'},
    {key: 'HTML' , value: 'HTML', text: 'HTML'},
    {key: 'TypeScript' , value: 'TypeScript', text: 'TypeScript'},
    {key: 'JavaScript' , value: 'JavaScript', text: 'JavaScript'},
    {key: 'Ruby' , value: 'Ruby', text: 'Ruby'},
    {key: 'CSS' , value: 'CSS', text: 'CSS'},
  ]

  const order = [
    {key: '' , value: '', text: 'Last updated'},
    {key: 'name' , value: 'name', text: 'Name'},
    {key: 'stars' , value: 'stars', text: 'Stars'},
  ]

  return (
    <div className='gh-filters'>
      <Dropdown
      selection
      options={types}
      placeholder='Type'
      onChange={handleTypeChange}
      />
      <Dropdown
      selection
      options={langs}
      placeholder='Language'
      onChange={handleLangChange}
      />
      <Dropdown
      selection
      options={order}
      placeholder='Sort'
      onChange={handleOrderChange}
      />
    </div>
  )
}

const Search = ( props:any ) => {

  const [filters, setFilters] = useState<any>()

  const handleTypeChange = (e:any, data:any) => {
    setFilters({...filters, type: data.value})
  }
  const handleLangChange = (e:any, data:any) => {
    setFilters({...filters, language: data.value})
  }
  const handleOrderChange = (e:any, data:any) => {
    setFilters({...filters, sort: data.value})
  }

  const handleQueryChange = (e:any) => {
    setFilters({...filters, query: e.target.value})
  }

  useEffect(() => {
    let page = props.page ? props.page : 1
    const delay = setTimeout(() => {
      props?.onSearch(filters, page)
    } , 2000)

    return () => clearTimeout(delay)
  }, [filters])

  return (
    <div className='gh-search'>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <Input fluid placeholder='Find a repository...' onChange={handleQueryChange}/>
          </Grid.Column>
          <Grid.Column width={8}>
          { Filters(handleTypeChange, handleLangChange, handleOrderChange) }
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </div>
  )
}

export default Search