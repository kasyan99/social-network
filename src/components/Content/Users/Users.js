import React from "react"
import User from "./User/User"
import classes from './Users.module.css'
import preloader from '../../../assets/img/loader.svg'

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
            ? <div className={classes.loader}><img src={preloader} alt="loading" /></div>
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