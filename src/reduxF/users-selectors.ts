import { AppStateType } from "./redux-store"

export const getUsersList = (state: AppStateType) => {
   return state.users.usersList
}

export const getPageSize = (state: AppStateType) => {
   return state.users.pageSize
}

export const getUsersCount = (state: AppStateType) => {
   return state.users.usersCount
}

export const getCurrentPage = (state: AppStateType) => {
   return state.users.currentPage
}

export const getIsFetching = (state: AppStateType) => {
   return state.users.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
   return state.users.followingInProgress
}

export const getDisplayedPagePortion = (state: AppStateType) => {
   return state.users.displayedPagePortion
}
