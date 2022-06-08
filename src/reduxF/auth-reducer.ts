import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA'

type InitialState = {
   id: number | null,
   login: string | null,
   email: string | null,
   isAuth: boolean
}

const initialState: InitialState = {
   id: null,
   login: null,
   email: null,
   isAuth: false
}

const authReducer = (state = initialState, action: any): InitialState => {
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

type ActionCreatorSetAuthUserDataType = {
   type: typeof SET_USER_DATA
   data: InitialState
}

export const actionCreatorSetAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): ActionCreatorSetAuthUserDataType => ({
   type: SET_USER_DATA, data: { id, login, email, isAuth }
})

export const getAuthUserDataThunkCreator = () => async (dispatch: any) => {
   const response = await authAPI.me()

   if (response.data.isAuth) {
      const { id, login, email } = response.data.me
      dispatch(actionCreatorSetAuthUserData(id, login, email, true))
   }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => async dispatch => {
   const checkLoginResponse = await authAPI.checkLogin(email, password, rememberMe)

   if (checkLoginResponse.data[0]) {

      const { id, login, email } = checkLoginResponse.data[0]

      const loginResponse = await authAPI.login(id, login, email)

      if (loginResponse.status === 200) {
         dispatch(actionCreatorSetAuthUserData(id, login, email, true))
      }

   } else {
      console.log('ckeck login', checkLoginResponse.data)
      dispatch(stopSubmit('loginForm', { _error: 'Email or password is wrong' }))
   }
}

export const logoutThunkCreator = () => async (dispatch: any) => {
   const response = await authAPI.logout()

   if (response.status === 200) {
      dispatch(actionCreatorSetAuthUserData(null, null, null, false))
   }

}

export default authReducer