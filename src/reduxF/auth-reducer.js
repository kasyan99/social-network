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
   console.log('d');
   return (dispatch) => {
      authAPI.me()
         .then(response => {
            if (response.data.isAuth) {
               console.log('iam auth');
               const { id, login, email } = response.data.me
               dispatch(actionCreatorSetAuthUserData(id, login, email, true))
            }
         })
   }
}

export const loginThunkCreator = (email, password, rememberMe) => dispatch => {
   authAPI.checkLogin(email, password, rememberMe)
      .then(response => {
         console.log(response)
         return response.data[0]
      })
      .then(userData => {
         console.log(userData);
         const { id, login, email } = userData
         authAPI.login(id, login, email)
            .then((response) => {
               if (response.status === 200) {
                  console.log(response.status)
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