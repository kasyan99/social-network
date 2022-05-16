import React from "react"
import classes from './Users.module.css'

const Paginator = ({ usersCount, pageSize, currentPage, setCurrentPage }) => {
   const pageCount = Math.ceil(usersCount / pageSize)
   const pageNumbers = []

   for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i)
   }

   return (
      <div className={classes.pages}>
         {pageNumbers.map(number =>
            <span
               className={currentPage === number ? classes.selectedPage : ''}
               key={number}
               onClick={() => setCurrentPage(number)}
            >
               {number}
            </span>
         )}
      </div>
   )
}

export default Paginator