import { Formik } from "formik"
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

const Users: React.FC<PropsUsersType> = ({ usersCount, pageSize, currentPage, setCurrentPage, displayedPagePortion, filterByname, setFilterByName, ...props }) => {
   return (
      <div className={classes.users}>
         <UsersSearchForm
            getUsers={props.getUsers}
            usersCount={usersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            setFilterByName={setFilterByName}
         />
         <Paginator
            usersCount={usersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            displayedPagePortion={displayedPagePortion}

            filterByname={filterByname}

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

type UsersSearchFormPropsType = {
   getUsers: (currentPage: number, pageSize: number, filterByname: string) => void
   usersCount: number
   pageSize: number
   currentPage: number
   setFilterByName: (filterByName: string) => void
}

const UsersSearchForm: React.FC<UsersSearchFormPropsType> = (props) => {
   const onSubmit = (values) => {
      console.log(values);
      props.setFilterByName(values.name)
      props.getUsers(1, props.pageSize, values.name)
   }
   return <div>
      <Formik
         initialValues={{ name: '' }}
         onSubmit={onSubmit}
      >
         {({
            values,
            handleSubmit,
            handleChange
         }) => (
            <form onSubmit={handleSubmit}>
               <input type="text" name="name" value={values.id} onChange={handleChange} />
               <button type="submit">
                  Submit
               </button>
            </form>
         )}
      </Formik>
   </div>
}

export default Users