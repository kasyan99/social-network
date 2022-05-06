import { stopSubmit } from "redux-form"
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
            ...action.data
         }
      default:
         return state
   }
}

export const actionCreatorSetAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })

export const getAuthUserDataThunkCreator = () => {
   return (dispatch) => {
      return authAPI.me()
         .then(response => {
            if (response.data.isAuth) {
               const { id, login, email } = response.data.me
               dispatch(actionCreatorSetAuthUserData(id, login, email, true))
            }
         })
   }
}

export const loginThunkCreator = (email, password, rememberMe) => dispatch => {
   authAPI.checkLogin(email, password, rememberMe)
      .then(response => {
         if (!response.data[0]) {
            console.log('ckeck login', response.data)
            dispatch(stopSubmit('loginForm', { _error: 'Email or password is wrong' }))
         }
         return response.data[0]
      })
      .then(userData => {
         const { id, login, email } = userData
         authAPI.login(id, login, email)
            .then((response) => {
               if (response.status === 200) {
                  dispatch(actionCreatorSetAuthUserData(id, login, email, true))
               }
            })
      })

}

export const logoutThunkCreator = () => dispatch => {
   authAPI.logout()
      .then(response => {
         if (response.status === 200) {
            dispatch(actionCreatorSetAuthUserData(null, null, null, false))
         }
      })

}

export default authReducer