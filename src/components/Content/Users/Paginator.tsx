import React from "react"
import { useState } from "react"
import classes from './Users.module.css'

type PropsType = {
   usersCount: number
   pageSize: number
   currentPage: number
   setCurrentPage: (number: number) => void
   displayedPagePortion: number
}

const Paginator: React.FC<PropsType> = ({ usersCount, pageSize, currentPage, setCurrentPage, displayedPagePortion }) => {
   const pageCount: number = Math.ceil(usersCount / pageSize)
   const pageNumbers: Array<number> = []

   let [currentDisplayedPage, setCurrentDisplayedPage] = useState(1)

   const leftNumber = displayedPagePortion * currentDisplayedPage - displayedPagePortion
   const rightNumber = displayedPagePortion * currentDisplayedPage

   for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i)
   }

   return (
      <div className={classes.pages}>
         {currentDisplayedPage > 1 &&
            <button onClick={() => setCurrentDisplayedPage(--currentDisplayedPage)}>&#8592;</button>}
         {pageNumbers
            .filter(number => number > leftNumber && number <= rightNumber)
            .map(number =>
               <span
                  className={currentPage === number ? classes.selectedPage : ''}
                  key={number}
                  onClick={() => setCurrentPage(number)}
               >
                  {number}
               </span>
            )}
         {currentDisplayedPage < pageCount / displayedPagePortion &&
            <button onClick={() => setCurrentDisplayedPage(++currentDisplayedPage)}>&#8594;</button>}
      </div>
   )
}

export default Paginator