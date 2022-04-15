import { usersAPI } from "../api/api"

const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCH = 'TOGGLE-FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

const initialState = {
   usersList: [

   ],
   usersCount: 0,
   pageSize: 4,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
}

function usersReducer(state = initialState, action) {

   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            usersList: state.usersList.map(user => user.id === action.id ? { ...user, followed: true } : user)
         }
      case UNFOLLOW:
         return {
            ...state,
            usersList: state.usersList.map(user => user.id === action.id ? { ...user, followed: false } : user)
         }
      case SET_USERS:
         return {
            ...state,
            usersList: [...action.users]
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }
      case SET_TOTAL_USERS_COUNT:
         return {
            ...state,
            usersCount: action.totalUsersCount
         }
      case TOGGLE_FETCH:
         return {
            ...state,
            isFetching: action.isFetching
         }
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         }
      default:
         return state
   }
}

export const actionCreatorSetUsers = (users) => ({ type: SET_USERS, users })
export const actionCreatorFollowt = (userId) => ({ type: FOLLOW, id: userId })
export const actionCreatorUnfollow = (userId) => ({ type: UNFOLLOW, id: userId })
export const actionCreatorCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const actionCreatorSetTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const actionCreatorToggleIsFetching = (isFetching) => ({ type: TOGGLE_FETCH, isFetching })
export const actionCreatorToggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })




export const getUsersThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(actionCreatorCurrentPage(currentPage))
      dispatch(actionCreatorToggleIsFetching(true))

      usersAPI.getUsers(currentPage, pageSize)
         .then(response => {
            dispatch(actionCreatorToggleIsFetching(false))
            dispatch(actionCreatorSetUsers(response.users))
            dispatch(actionCreatorSetTotalUsersCount(response.totalCount))
         })
   }
}

const unfollowThunkCreator = (id) => {
   return (dispatch) => {
      usersAPI.unfollow(id).then(response => {
         if (response.statusText === 'OK') {
            dispatch(actionCreatorUnfollow(id))
         }
         dispatch(actionCreatorToggleIsFollowing(false, id))
      })
   }
}
const followTnunkCreator = (id) => {
   return (dispatch) => {
      usersAPI.follow(id).then(response => {
         if (response.statusText === 'OK') {
            dispatch(actionCreatorFollowt(id))
         }
         dispatch(actionCreatorToggleIsFollowing(false, id))
      })
   }
}

export const followToggleThunkCreator = (user) => {

   return (dispatch) => {
      dispatch(actionCreatorToggleIsFollowing(true, user.id))
      user.followed
         ? dispatch(unfollowThunkCreator(user.id))
         : dispatch(followTnunkCreator(user.id))
   }
}
export default usersReducer