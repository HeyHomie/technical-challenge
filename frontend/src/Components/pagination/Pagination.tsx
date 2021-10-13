import './pagination.css'

interface Props {
  currentPage:number,
  totalPage:number,
  setCurrentPage:React.Dispatch<React.SetStateAction<number>>

}

const Pagination = ({currentPage,totalPage,setCurrentPage}: Props) => {

  const prevPage = () => {
    setCurrentPage(currentPage=>{
     if(currentPage === 1) return currentPage;

     return currentPage - 1
    })
  }

  const NextPage = () => {
    setCurrentPage(currentPage=>{
      if(currentPage === totalPage) return currentPage;
      return currentPage + 1
    })
  }

  
  const isDisabledPrevious = currentPage === 1 ? true : false;
  const isDisabledNext = currentPage === totalPage ? true : false;


  return (
    <div className="pagination">
        <button className={`btn btn--medium ${isDisabledPrevious?'btn--disabled':''}`} onClick={prevPage} >Previous</button>
         <p className="pagination__numbers">{currentPage}-{totalPage}</p>
        <button className={`btn btn--medium ${isDisabledNext?'btn--disabled':''}`}  onClick={NextPage} >Next</button>            
    </div>
  )
}

export default Pagination
