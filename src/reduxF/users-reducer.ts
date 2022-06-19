// import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { usersAPI } from "../api/api"
import { ProfileType } from "../types/types"
import { InferActionsTypes, AppStateType } from "./redux-store"

const SET_USERS = 'social-network/users/SET-USERS'
const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCH = 'social-network/users/TOGGLE-FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS'

// type InitialStateType = {
//    usersList: Array<ProfileType>
//    usersCount: number,
//    pageSize: number,
//    displayedPagePortion: number,
//    currentPage: number,
//    isFetching: boolean,
//    followingInProgress: Array<number>//Array of users id
// }

const initialState = {
   usersList: [] as Array<ProfileType>,
   usersCount: 0,
   pageSize: 2,
   displayedPagePortion: 3,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [] as Array<number>
}

type InitialStateType = typeof initialState

type ActionsUsersType = InferActionsTypes<typeof usersActions>

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


export const usersActions = {
   SetUsers: (users: Array<ProfileType>) => ({ type: SET_USERS, users } as const),

   Followt: (userId: number) => ({ type: FOLLOW, id: userId } as const),

   Unfollow: (userId: number) => ({ type: UNFOLLOW, id: userId } as const),

   CurrentPage: (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const),

   SetTotalUsersCount: (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const),

   ToggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_FETCH, isFetching } as const),

   ToggleIsFollowing: (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const)
}



// type GetStateType = () => AppStateType
// type DispatchType = Dispatch<ActionsUsersType>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsUsersType>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType =>
   async (dispatch, getState) => {
      dispatch(usersActions.CurrentPage(currentPage))
      dispatch(usersActions.ToggleIsFetching(true))

      const response = await usersAPI.getUsers(currentPage, pageSize)

      dispatch(usersActions.ToggleIsFetching(false))
      dispatch(usersActions.SetUsers(response.users))
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










//////////////////////////////////////////////////////////////////////////////
// // import { Dispatch } from "redux"
// import { ThunkAction } from "redux-thunk"
// import { usersAPI } from "../api/api"
// import { ProfileType } from "../types/types"
// import { AppStateType } from "./redux-store"

// const SET_USERS = 'social-network/users/SET-USERS'
// const FOLLOW = 'social-network/users/FOLLOW'
// const UNFOLLOW = 'social-network/users/UNFOLLOW'
// const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE'
// const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT'
// const TOGGLE_FETCH = 'social-network/users/TOGGLE-FETCH'
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS'

// // type InitialStateType = {
// //    usersList: Array<ProfileType>
// //    usersCount: number,
// //    pageSize: number,
// //    displayedPagePortion: number,
// //    currentPage: number,
// //    isFetching: boolean,
// //    followingInProgress: Array<number>//Array of users id
// // }

// const initialState = {
//    usersList: [] as Array<ProfileType>,
//    usersCount: 0,
//    pageSize: 2,
//    displayedPagePortion: 3,
//    currentPage: 1,
//    isFetching: false,
//    followingInProgress: [] as Array<number>
// }

// type InitialStateType = typeof initialState

// function usersReducer(state = initialState, action: ActionsUsersType): InitialStateType {

//    switch (action.type) {
//       case FOLLOW:
//          return {
//             ...state,
//             usersList: state.usersList.map(user => user.id === action.id ? { ...user, followed: true } : user)
//          }
//       case UNFOLLOW:
//          return {
//             ...state,
//             usersList: state.usersList.map(user => user.id === action.id ? { ...user, followed: false } : user)
//          }
//       case SET_USERS:
//          return {
//             ...state,
//             usersList: [...action.users]
//          }
//       case SET_CURRENT_PAGE:
//          return {
//             ...state,
//             currentPage: action.currentPage
//          }
//       case SET_TOTAL_USERS_COUNT:
//          return {
//             ...state,
//             usersCount: action.totalUsersCount
//          }
//       case TOGGLE_FETCH:
//          return {
//             ...state,
//             isFetching: action.isFetching
//          }
//       case TOGGLE_IS_FOLLOWING_PROGRESS:
//          return {
//             ...state,
//             followingInProgress: action.isFetching
//                ? [...state.followingInProgress, action.userId]
//                : state.followingInProgress.filter(id => id !== action.userId)
//          }
//       default:
//          return state
//    }
// }

// type ActionsUsersType = SetUsersType | FollowtType | UnfollowType | CurrentPageType
//    | SetTotalUsersCountType | ToggleIsFetchingType | ToggleIsFollowingType

// type SetUsersType = {
//    type: typeof SET_USERS
//    users: Array<ProfileType>
// }

// export const SetUsers = (users: Array<ProfileType>): SetUsersType => ({ type: SET_USERS, users })

// type FollowtType = {
//    type: typeof FOLLOW
//    id: number
// }

// export const Followt = (userId: number): FollowtType => ({ type: FOLLOW, id: userId })

// type UnfollowType = {
//    type: typeof UNFOLLOW
//    id: number
// }

// export const Unfollow = (userId: number): UnfollowType => ({ type: UNFOLLOW, id: userId })

// type CurrentPageType = {
//    type: typeof SET_CURRENT_PAGE
//    currentPage: number
// }

// export const CurrentPage = (currentPage: number): CurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })

// type SetTotalUsersCountType = {
//    type: typeof SET_TOTAL_USERS_COUNT
//    totalUsersCount: number
// }

// export const SetTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

// type ToggleIsFetchingType = {
//    type: typeof TOGGLE_FETCH
//    isFetching: boolean
// }

// export const ToggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({ type: TOGGLE_FETCH, isFetching })

// type ToggleIsFollowingType = {
//    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
//    isFetching: boolean
//    userId: number
// }

// export const ToggleIsFollowing = (isFetching: boolean, userId: number): ToggleIsFollowingType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


// // type GetStateType = () => AppStateType
// // type DispatchType = Dispatch<ActionsUsersType>
// type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsUsersType>

// export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType =>
//    async (dispatch, getState) => {
//       dispatch(CurrentPage(currentPage))
//       dispatch(ToggleIsFetching(true))

//       const response = await usersAPI.getUsers(currentPage, pageSize)

//       dispatch(ToggleIsFetching(false))
//       dispatch(SetUsers(response.users))
//       dispatch(SetTotalUsersCount(Number(response.totalCount)))

//    }

// const unfollowThunkCreator = (id: number): ThunkType =>
//    async (dispatch) => {
//       const response = await usersAPI.unfollow(id)

//       if (response.statusText === 'OK') {
//          dispatch(Unfollow(id))
//       }
//       dispatch(ToggleIsFollowing(false, id))
//    }

// const followTnunkCreator = (id: number): ThunkType =>
//    async (dispatch) => {
//       const response = await usersAPI.follow(id)

//       if (response.statusText === 'OK') {
//          dispatch(Followt(id))
//       }
//       dispatch(ToggleIsFollowing(false, id))
//    }

// export const followToggleThunkCreator = (user: ProfileType): ThunkType =>
//    (dispatch) => {
//       dispatch(ToggleIsFollowing(true, user.id))
//       user.followed
//          ? dispatch(unfollowThunkCreator(user.id))
//          : dispatch(followTnunkCreator(user.id))
//    }

// export default usersReducer