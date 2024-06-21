import React from 'react'
import ReactPaginate from 'react-paginate'
import "./paginate.css"


export default function Paginate({pageCount,changePage}) {
    
    return (
    
        <ReactPaginate 
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName= "paginationBttns"
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName= "paginationActive"
                />
    
    )
}
