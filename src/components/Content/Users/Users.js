import React from "react"
import Preloader from "../../common/Preloader"
import User from "./User/User"
import classes from './Users.module.css'

const Users = (props) => {
   const pageCount = Math.ceil(props.usersCount / props.pageSize)
   const pageNumbers = []

   for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i)
   }

   return (

      <div className={classes.users}>
         <div className={classes.pages}>
            {pageNumbers.map(number =>
               <span
                  className={props.currentPage === number ? classes.selectedPage : ''}
                  key={number}
                  onClick={() => props.setCurrentPage(number)}
               >
                  {number}
               </span>
            )}
         </div>

         {props.isFetching
            ? <Preloader />
            : props.usersList.map(user =>
               <User
                  user={user}
                  key={user.id}
                  follow={props.follow}
                  unfollow={props.unfollow}
               />)
         }
      </div >
   )
}

export default Users