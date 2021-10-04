import './paginator.css'
import { Pagination } from "semantic-ui-react"

const Paginator = ( props:any ) => {
  if (props.totalPages === undefined) {
    return null
  } else {
    return (
      <>
        <Pagination 
        pointing
        secondary
        lastItem={null}
        firstItem={null}
        defaultActivePage={1} 
        className='gh-paginator'
        activePage={props?.activePage} 
        totalPages={props?.totalPages} 
        onPageChange={props?.onPageChange} 
        />
      </>
    )
  }
}

export default Paginator