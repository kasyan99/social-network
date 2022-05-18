import React from "react"
import Preloader from "../../common/Preloader"
import Paginator from "./Paginator"
import User from "./User/User"
import classes from './Users.module.css'

const Users = (props) => {

   return (
      <div className={classes.users}>

         <Paginator
            usersCount={props.usersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
            displayedPagePortion={props.displayedPagePortion}
         />

         {props.isFetching
            ? <Preloader />
            : props.usersList.map(user =>
               <User
                  key={user.id}
                  user={user}
                  {...props}
               />)
         }
      </div >
   )
}

export default Users