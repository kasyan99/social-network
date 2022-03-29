const RENDER_USERS = 'RENDER-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
   usersList: [
      { id: 1, fullName: 'Nikolay', status: 'I am loking for a job', location: { city: 'Yellow Water', country: 'Ukraine' }, followed: true },
      { id: 2, fullName: 'Nikita', status: 'I sell grass', location: { city: 'Kyiv', country: 'Ukraine' }, followed: false },
      { id: 3, fullName: 'Yana', status: 'I will become an engineer', location: { city: 'Trier', country: 'German' }, followed: true },
      { id: 4, fullName: 'Yosyp', status: 'Potato is gold', location: { city: 'Cheremyshka', country: 'Belorysia' }, followed: false },
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
      default:
         return state
   }
}

export const actionCreatorRenderUsers = () => ({ type: RENDER_USERS })
export const actionCreatorFollowt = (userId) => ({ type: FOLLOW, id: userId })
export const actionCreatorUnfollow = (userId) => ({ type: UNFOLLOW, id: userId })

export default usersReducer