// import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { usersAPI } from "../api/api"
import { ProfileType } from "../types/types"
import { AppStateType } from "./redux-store"

const SET_USERS = 'social-network/users/SET-USERS'
const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCH = 'social-network/users/TOGGLE-FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS'

type InitialStateType = {
   usersList: Array<ProfileType>
   usersCount: number,
   pageSize: number,
   displayedPagePortion: number,
   currentPage: number,
   isFetching: boolean,
   followingInProgress: Array<number>//Array of users id
}

const initialState: InitialStateType = {
   usersList: [],
   usersCount: 0,
   pageSize: 2,
   displayedPagePortion: 3,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
}

function usersReducer(state = initialState, action: ActionsUsersType): InitialStateType {

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

type ActionsUsersType = ActionCreatorSetUsersType | ActionCreatorFollowtType | ActionCreatorUnfollowType | ActionCreatorCurrentPageType
   | ActionCreatorSetTotalUsersCountType | ActionCreatorToggleIsFetchingType | ActionCreatorToggleIsFollowingType

type ActionCreatorSetUsersType = {
   type: typeof SET_USERS
   users: Array<ProfileType>
}

export const actionCreatorSetUsers = (users: Array<ProfileType>): ActionCreatorSetUsersType => ({ type: SET_USERS, users })

type ActionCreatorFollowtType = {
   type: typeof FOLLOW
   id: number
}

export const actionCreatorFollowt = (userId: number): ActionCreatorFollowtType => ({ type: FOLLOW, id: userId })

type ActionCreatorUnfollowType = {
   type: typeof UNFOLLOW
   id: number
}

export const actionCreatorUnfollow = (userId: number): ActionCreatorUnfollowType => ({ type: UNFOLLOW, id: userId })

type ActionCreatorCurrentPageType = {
   type: typeof SET_CURRENT_PAGE
   currentPage: number
}

export const actionCreatorCurrentPage = (currentPage: number): ActionCreatorCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })

type ActionCreatorSetTotalUsersCountType = {
   type: typeof SET_TOTAL_USERS_COUNT
   totalUsersCount: number
}

export const actionCreatorSetTotalUsersCount = (totalUsersCount: number): ActionCreatorSetTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

type ActionCreatorToggleIsFetchingType = {
   type: typeof TOGGLE_FETCH
   isFetching: boolean
}

export const actionCreatorToggleIsFetching = (isFetching: boolean): ActionCreatorToggleIsFetchingType => ({ type: TOGGLE_FETCH, isFetching })

type ActionCreatorToggleIsFollowingType = {
   type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
   isFetching: boolean
   userId: number
}

export const actionCreatorToggleIsFollowing = (isFetching: boolean, userId: number): ActionCreatorToggleIsFollowingType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


// type GetStateType = () => AppStateType
// type DispatchType = Dispatch<ActionsUsersType>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsUsersType>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType =>
   async (dispatch, getState) => {
      dispatch(actionCreatorCurrentPage(currentPage))
      dispatch(actionCreatorToggleIsFetching(true))

      const response = await usersAPI.getUsers(currentPage, pageSize)

      dispatch(actionCreatorToggleIsFetching(false))
      dispatch(actionCreatorSetUsers(response.users))
      dispatch(actionCreatorSetTotalUsersCount(Number(response.totalCount)))

   }

const unfollowThunkCreator = (id: number): ThunkType =>
   async (dispatch) => {
      const response = await usersAPI.unfollow(id)

      if (response.statusText === 'OK') {
         dispatch(actionCreatorUnfollow(id))
      }
      dispatch(actionCreatorToggleIsFollowing(false, id))
   }

const followTnunkCreator = (id: number): ThunkType =>
   async (dispatch) => {
      const response = await usersAPI.follow(id)

      if (response.statusText === 'OK') {
         dispatch(actionCreatorFollowt(id))
      }
      dispatch(actionCreatorToggleIsFollowing(false, id))
   }

export const followToggleThunkCreator = (user: ProfileType): ThunkType =>
   (dispatch) => {
      dispatch(actionCreatorToggleIsFollowing(true, user.id))
      user.followed
         ? dispatch(unfollowThunkCreator(user.id))
         : dispatch(followTnunkCreator(user.id))
   }

export default usersReducer