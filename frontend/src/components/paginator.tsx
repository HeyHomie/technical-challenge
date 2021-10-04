import './paginator.css'
import { Pagination } from 'semantic-ui-react'

const Paginator = ( props:any ) => {

  const pageInfo = props.pageInfo

  const handlePageChange = (goToPage:any, handleChange:any) => {
    let page
  
    if (goToPage == '⟩') {
      page = pageInfo.page + 1
    } else if (goToPage == '⟨') {
      page = pageInfo.page - 1
    } else {
      page = parseInt(goToPage)
    }
  
    handleChange(page)
  }

  if (pageInfo === undefined) {
    return null
  } else {
    return (
      <Pagination 
      pointing
      secondary
      lastItem={null}
      firstItem={null}
      defaultActivePage={1} 
      className='gh-paginator'
      activePage={pageInfo.activePage} 
      totalPages={pageInfo.totalPages} 
      onPageChange={ (e:any) => {
        handlePageChange(e.target.innerText, props.handleChange)
      }}
      />
    )
  }
}

export default Paginator