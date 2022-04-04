const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCH = 'TOGGLE-FETCH'

const initialState = {
   usersList: [

   ],
   usersCount: 0,
   pageSize: 4,
   currentPage: 1,
   isFetching: false
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
      default:
         return state
   }
}

export const actionCreatorSetUsers = (users) => ({ type: SET_USERS, users })
export const actionCreatorFollowt = (userId) => ({ type: FOLLOW, id: userId })
export const actionCreatorUnfollow = (userId) => ({ type: UNFOLLOW, id: userId })
export const actionCreatorCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const actionCreatorSetTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const actionCreatortoggleIsFetching = (isFetching) => ({ type: TOGGLE_FETCH, isFetching })

export default usersReducer