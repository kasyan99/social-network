import { Field, Formik } from "formik"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { followToggleThunkCreator, getUsersThunkCreator, usersActions } from "../../../reduxF/users-reducer"
import { getCurrentPage, getDisplayedPagePortion, getFilter, getFollowingInProgress, getIsFetching, getPageSize, getUsersCount, getUsersList } from "../../../reduxF/users-selectors"
import { ProfileType } from "../../../types/types"
import Preloader from "../../common/Preloader"
import Paginator from "./Paginator"
import User from "./User/User"
import classes from './Users.module.css'

const Users: React.FC = () => {

   const usersList = useSelector(getUsersList)
   const pageSize = useSelector(getPageSize)
   const usersCount = useSelector(getUsersCount)
   const currentPage = useSelector(getCurrentPage)
   const displayedPagePortion = useSelector(getDisplayedPagePortion)
   const filter = useSelector(getFilter)
   const isFetching = useSelector(getIsFetching)

   const followingInProgress = useSelector(getFollowingInProgress)

   const dispach = useDispatch()

   const setCurrentPage = (pageNumber: number, filter: FilterType) => {
      dispach(getUsersThunkCreator(pageNumber, pageSize, filter))
   }

   const onFilterChanged = () => {
      dispach(getUsersThunkCreator(1, pageSize, filter))
   }

   const setFilter = (filter: FilterType) => {
      dispach(usersActions.setFilter(filter))
   }

   const followToggle = (user: ProfileType) => {
      dispach(followToggleThunkCreator(user))
   }

   const navigate = useNavigate()
   // console.log(navigate);

   const location = useLocation()

   useEffect(() => {
      const obj = new URLSearchParams(location.search)
      console.log('first', obj.get('fullName_like'));

      const initialFilter: FilterType = {
         filterByName: obj.get('fullName_like'),
         filterByFollow: obj.get('followed')
      }
      dispach(usersActions.setFilter(initialFilter))

   }, [])

   useEffect(() => {
      dispach(getUsersThunkCreator(currentPage, pageSize, filter))

      const byName = filter.filterByName ? `&fullName_like=${filter.filterByName}` : ''
      const byFollow = filter.filterByFollow ? `followed=${filter.filterByFollow}` : ''

      navigate(`../users?${byFollow}${byName}`, { replace: true })

      console.log(location);
   }, [filter])

   return (
      <div className={classes.users}>
         <UsersSearchForm
            usersCount={usersCount}
            pageSize={pageSize}
            currentPage={currentPage}

            setFilter={setFilter}

            onFilterChanged={onFilterChanged}
         />
         <Paginator
            usersCount={usersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            displayedPagePortion={displayedPagePortion}

            filter={filter}

         />

         {isFetching
            ? <Preloader />
            : usersList.map(user =>
               <User
                  key={user._id}
                  user={user}
                  followingInProgress={followingInProgress}
                  followToggle={followToggle}
               />)
         }
      </div >
   )
}

type UsersSearchFormPropsType = {
   usersCount: number
   pageSize: number
   currentPage: number
   setFilter: (filter: FilterType) => void
   onFilterChanged: () => void
}

export type FilterType = {
   filterByName: string
   filterByFollow: string
}

const UsersSearchForm: React.FC<UsersSearchFormPropsType> = (props) => {
   const dispach = useDispatch()

   const onSubmit = (values: FilterType) => {
      console.log(values);
      props.setFilter(values)
      dispach(getUsersThunkCreator(1, props.pageSize, values))
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