import React from "react"
import Preloader from "../../common/Preloader"
import Paginator from "./Paginator"
import User from "./User/User"
import classes from './Users.module.css'
import { PropsUsersType } from "./UsersContainer"

// type PropsType = {
//    usersCount: number
//    pageSize: number
//    currentPage: number
//    setCurrentPage: (number: number) => void
//    displayedPagePortion: number
//    isFetching: boolean
//    usersList: Array<ProfileType>
// }

const Users: React.FC<PropsUsersType> = ({ usersCount, pageSize, currentPage, setCurrentPage, displayedPagePortion, ...props }) => {
   return (
      <div className={classes.users}>

         <Paginator
            usersCount={usersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            displayedPagePortion={displayedPagePortion}
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