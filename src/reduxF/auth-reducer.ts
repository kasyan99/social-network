import { FormAction, stopSubmit } from "redux-form"
import { authAPI } from "../api/auth-api"
import { BaseThunkType, InferActionsTypes } from "./redux-store"

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA'

const initialState = {
   id: null as number,
   login: null as string,
   email: null as string,
   isAuth: false
}

type InitialState = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

const authReducer = (state = initialState, action: ActionsType): InitialState => {
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

export const actions = {
   setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
      type: SET_USER_DATA, data: { id, login, email, isAuth }
   })
}

export const getAuthUserDataThunkCreator = (): ThunkType => async (dispatch) => {
   const response = await authAPI.me()

   if (response.data.isAuth) {
      const { id, login, email } = response.data.me
      dispatch(actions.setAuthUserData(id, login, email, true))
   }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
   const checkLoginResponse = await authAPI.checkLogin(email, password, rememberMe)

   if (checkLoginResponse.data[0]) {

      const { id, login, email } = checkLoginResponse.data[0]

      const loginResponse = await authAPI.login(id, login, email)

      if (loginResponse.status === 200) {
         dispatch(actions.setAuthUserData(id, login, email, true))
      }

   } else {
      console.log('ckeck login', checkLoginResponse.data)
      dispatch(stopSubmit('loginForm', { _error: 'Email or password is wrong' }))
   }
}

export const logoutThunkCreator = () => async (dispatch: any) => {
   const response = await authAPI.logout()

   if (response.status === 200) {
      dispatch(actions.setAuthUserData(null, null, null, false))
   }

}

export default authReducer