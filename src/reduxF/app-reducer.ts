import { getAuthUserDataThunkCreator } from "./auth-reducer"
import { BaseThunkType, InferActionsTypes } from "./redux-store"

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED-SUCCESS'

const initialState = {
   initialized: false
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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


export const actions = {
   initializedSuccess: () => ({ type: INITIALIZED_SUCCESS })
}
// export const actionInitializedSuccess = (): ActionInitializedSuccessType => ({ type: INITIALIZED_SUCCESS })

export const initializeThunkCreator = (): ThunkType => async (dispatch) => {
   await dispatch(getAuthUserDataThunkCreator())

   dispatch(actions.initializedSuccess())

}

export default appReducer