import { usersAPI } from "../api/users-api"
import { FilterType } from "../components/Content/Users/Users"
import { ProfileType } from "../types/types"
import { InferActionsTypes, BaseThunkType } from "./redux-store"

const SET_USERS = 'social-network/users/SET-USERS'
const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCH = 'social-network/users/TOGGLE-FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS'
const SET_FILTER = 'social-network/users/SET-FILTER'

const initialState = {
   usersList: [] as Array<ProfileType>,
   usersCount: 0,
   pageSize: 2,
   displayedPagePortion: 3,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [] as Array<number>,
   filter: {
      filterByName: '',
      filterByFollow: 'all'
   }
}

type InitialStateType = typeof initialState

type ActionsUsersType = InferActionsTypes<typeof usersActions>

type ThunkType = BaseThunkType<ActionsUsersType>


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
      case SET_FILTER:
         return {
            ...state,
            filter: action.filter
         }
      default:
         return state
   }
}


export const usersActions = {
   setUsers: (users: Array<ProfileType>) => ({ type: SET_USERS, users } as const),

   Followt: (userId: number) => ({ type: FOLLOW, id: userId } as const),

   Unfollow: (userId: number) => ({ type: UNFOLLOW, id: userId } as const),

   CurrentPage: (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const),

   SetTotalUsersCount: (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const),

   ToggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_FETCH, isFetching } as const),

   ToggleIsFollowing: (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const),

   setFilter: (filter: FilterType) => ({ type: SET_FILTER, filter } as const)

}


export const getUsersThunkCreator = (currentPage: number, pageSize: number, filter: FilterType): ThunkType =>
   async (dispatch) => {
      dispatch(usersActions.CurrentPage(currentPage))
      dispatch(usersActions.ToggleIsFetching(true))

      const response = await usersAPI.getUsers(currentPage, pageSize, filter)

      dispatch(usersActions.ToggleIsFetching(false))
      dispatch(usersActions.setUsers(response.users))
      dispatch(usersActions.SetTotalUsersCount(Number(response.totalCount)))

   }

export const getFilteredUsersThunkCreator = (name: string): ThunkType =>
   async (dispatch, getState) => {
      // dispatch(usersActions.setFilteredUsers(id))
      dispatch(usersActions.ToggleIsFetching(true))

      const response = await usersAPI.getFilteredUsers(name)

      dispatch(usersActions.ToggleIsFetching(false))
      dispatch(usersActions.setUsers(response.users))
      dispatch(usersActions.SetTotalUsersCount(Number(response.totalCount)))

   }

const unfollowThunkCreator = (id: number): ThunkType =>
   async (dispatch) => {
      const response = await usersAPI.unfollow(id)

      if (response.statusText === 'OK') {
         dispatch(usersActions.Unfollow(id))
      }
      dispatch(usersActions.ToggleIsFollowing(false, id))
   }

const followTnunkCreator = (id: number): ThunkType =>
   async (dispatch) => {
      const response = await usersAPI.follow(id)

      if (response.statusText === 'OK') {
         dispatch(usersActions.Followt(id))
      }
      dispatch(usersActions.ToggleIsFollowing(false, id))
   }

export const followToggleThunkCreator = (user: ProfileType): ThunkType =>
   (dispatch) => {
      dispatch(usersActions.ToggleIsFollowing(true, user.id))
      user.followed
         ? dispatch(unfollowThunkCreator(user.id))
         : dispatch(followTnunkCreator(user.id))
   }

export default usersReducer