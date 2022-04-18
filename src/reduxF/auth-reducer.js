import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
   id: null,
   login: null,
   email: null,
   isAuth: false
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      default:
         return state
   }
}

export const actionCreatorSetAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: { id, login, email } })

export const getAuthUserDataThunkCreator = () => {
   return (dispatch) => {
      authAPI.me()
         .then(response => {
            if (response.data.isAuth) {
               const { id, login, email } = response.data.me
               dispatch(actionCreatorSetAuthUserData(id, login, email))
            }
         })
   }
}
export default authReducer