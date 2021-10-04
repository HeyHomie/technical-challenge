import './paginator.css'
import { Pagination } from "semantic-ui-react"

const Paginator = ( props:any ) => {
  return (
    <>
      <Pagination 
      pointing
      secondary
      className='gh-paginator'
      defaultActivePage={1} 
      activePage={props.activePage} 
      totalPages={props.totalPages} 
      onPageChange={props.onPageChange} 
      />
    </>
  )
}

export default Paginator