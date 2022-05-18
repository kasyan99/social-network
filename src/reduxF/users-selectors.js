export const getUsersList = state => {
   return state.users.usersList
}

export const getPageSize = state => {
   return state.users.pageSize
}

export const getUsersCount = state => {
   return state.users.usersCount
}

export const getCurrentPage = state => {
   return state.users.currentPage
}

export const getIsFetching = state => {
   return state.users.isFetching
}

export const getFollowingInProgress = state => {
   return state.users.followingInProgress
}

export const getDisplayedPagePortion = state => {
   return state.users.displayedPagePortion
}
