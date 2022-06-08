import { getAuthUserDataThunkCreator } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED-SUCCESS'

type InitialStateType = {
   initialized: boolean
}

const initialState: InitialStateType = {
   initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type ActionInitializedSuccessType = {
   type: typeof INITIALIZED_SUCCESS
}

export const actionInitializedSuccess = (): ActionInitializedSuccessType => ({ type: INITIALIZED_SUCCESS })

export const initializeThunkCreator = () => (dispatch: any) => {
   dispatch(getAuthUserDataThunkCreator())
      .then(() => {
         dispatch(actionInitializedSuccess())
      })
}

export default appReducer