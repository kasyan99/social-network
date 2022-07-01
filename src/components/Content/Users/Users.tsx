import { Field, Formik } from "formik"
import React from "react"
import Preloader from "../../common/Preloader"
import Paginator from "./Paginator"
import User from "./User/User"
import classes from './Users.module.css'
import { PropsUsersType } from "./UsersContainer"

const Users: React.FC<PropsUsersType> = ({ usersCount, pageSize, currentPage, setCurrentPage, displayedPagePortion, filter, setFilter, ...props }) => {
   return (
      <div className={classes.users}>
         <UsersSearchForm
            getUsers={props.getUsers}
            usersCount={usersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            setFilter={setFilter}
         />
         <Paginator
            usersCount={usersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            displayedPagePortion={displayedPagePortion}

            filter={filter}

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
   getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
   usersCount: number
   pageSize: number
   currentPage: number
   setFilter: (filter: FilterType) => void
}

export type FilterType = {
   filterByName: string
   filterByFollow: string
}

const UsersSearchForm: React.FC<UsersSearchFormPropsType> = (props) => {

   const onSubmit = (values: FilterType) => {
      console.log(values);
      props.setFilter(values)
      props.getUsers(1, props.pageSize, values)
   }
   return <div>
      <Formik
         initialValues={{ filterByName: '', filterByFollow: 'all' }}
         onSubmit={onSubmit}
      >
         {({
            handleSubmit,
            handleChange
         }) => (
            <form onSubmit={handleSubmit}>
               <Field type="text" name="filterByName" placeholder="Search by name" onChange={handleChange} />
               <Field as="select" name="filterByFollow">
                  <option value="all">All</option>
                  <option value="true">Followed</option>
                  <option value="false">Unfollowed</option>
               </Field>
               <button type="submit">
                  Submit
               </button>
            </form>
         )}
      </Formik>
   </div>
}

export default Users