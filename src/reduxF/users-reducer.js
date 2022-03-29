const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
   usersList: [

   ]
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
            usersList: [...state.usersList, ...action.users]
         }
      default:
         return state
   }
}

export const actionCreatorSetUsers = (users) => ({ type: SET_USERS, users })
export const actionCreatorFollowt = (userId) => ({ type: FOLLOW, id: userId })
export const actionCreatorUnfollow = (userId) => ({ type: UNFOLLOW, id: userId })

export default usersReducer