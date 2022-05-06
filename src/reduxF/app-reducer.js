import { getAuthUserDataThunkCreator } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

const initialState = {
   initialized: false
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true
         }
      default:
         return state
   }
}

export const actionInitializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeThunkCreator = () => dispatch => {
   dispatch(getAuthUserDataThunkCreator())
      .then(() => {
         dispatch(actionInitializedSuccess())
      })
}

export default appReducer