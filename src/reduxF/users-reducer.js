import { usersAPI } from "../api/api"

const SET_USERS = 'social-network/users/SET-USERS'
const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCH = 'social-network/users/TOGGLE-FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS'

const initialState = {
   usersList: [

   ],
   usersCount: 0,
   pageSize: 2,
   displayedPagePortion: 3,
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


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
   dispatch(actionCreatorCurrentPage(currentPage))
   dispatch(actionCreatorToggleIsFetching(true))

   const response = await usersAPI.getUsers(currentPage, pageSize)

   dispatch(actionCreatorToggleIsFetching(false))
   dispatch(actionCreatorSetUsers(response.users))
   dispatch(actionCreatorSetTotalUsersCount(response.totalCount))

}

const unfollowThunkCreator = (id) => async (dispatch) => {
   const response = await usersAPI.unfollow(id)

   if (response.statusText === 'OK') {
      dispatch(actionCreatorUnfollow(id))
   }
   dispatch(actionCreatorToggleIsFollowing(false, id))
}

const followTnunkCreator = (id) => async (dispatch) => {
   const response = await usersAPI.follow(id)

   if (response.statusText === 'OK') {
      dispatch(actionCreatorFollowt(id))
   }
   dispatch(actionCreatorToggleIsFollowing(false, id))
}

export const followToggleThunkCreator = (user) => (dispatch) => {
   dispatch(actionCreatorToggleIsFollowing(true, user.id))
   user.followed
      ? dispatch(unfollowThunkCreator(user.id))
      : dispatch(followTnunkCreator(user.id))
}

export default usersReducer