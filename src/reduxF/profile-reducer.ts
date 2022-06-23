import { FormAction, stopSubmit } from "redux-form"
import { profileAPI } from "../api/profile-api"
import { Post, ProfileType } from "../types/types"
import { BaseThunkType, InferActionsTypes } from "./redux-store"

const ADD_POST = 'social-network/profile/ADD-POST'
const UPDATE_POST_TEXT = 'social-network/profile/UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE'
const SET_USER_STATUS = 'social-network/profile/SET-USER-STATUS'
const DELETE_POST = 'social-network/profile/DELETE-POST'
const SET_AVATAR = 'social-network/profile/SET-AVATAR'


export type InitialStateType = {
   profile: ProfileType | null
   posts: Array<Post>
   status: string
}

const initialState: InitialStateType = {
   profile: null,
   posts: [
      { id: 1, text: 'today is a first day of react', likes: 20 },
      { id: 2, text: 'weekend!!!', likes: 3 },
      { id: 3, text: 'close the sky!', likes: 65 },
      { id: 4, text: 'go to the party!', likes: 5 },
   ],
   status: ''
}

type ActionsType = InferActionsTypes<typeof profileActions>
type ThunkType = BaseThunkType<ActionsType | FormAction>


function profileReducer(state = initialState, action: ActionsType): InitialStateType {

   switch (action.type) {
      case ADD_POST:
         const post = {
            id: 6,
            text: action.newPostText,
            likes: 0
         }
         return {
            ...state,
            posts: [...state.posts, post]
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status
         }
      case DELETE_POST:
         return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.id)
         }
      case SET_AVATAR:
         return {
            ...state,
            profile: { ...state.profile, avatar: action.avatar }
         }
      default:
         return state
   }
}

export const profileActions = {
   setUserProfile: (profile: ProfileType | null) => ({ type: SET_USER_PROFILE, profile } as const),

   addPost: (newPostText: string) => ({ type: ADD_POST, newPostText } as const),

   updatePostText: (newPostText: string) => ({ type: UPDATE_POST_TEXT, newPostText } as const),

   setUserStatus: (status: string) => ({ type: SET_USER_STATUS, status } as const),

   setAvatar: (avatar: any) => ({ type: SET_AVATAR, avatar } as const),
   //for test
   deletePost: (id: number) => ({ type: DELETE_POST, id } as const)
}

export const getUserProfilThunkCreator = (userId: number): ThunkType => async (dispatch) => {
   const profileInfo = await profileAPI.getProfileInfo(userId)

   dispatch(profileActions.setUserProfile(profileInfo))
}

export const getUserStatusThunkCreator = (userId: number): ThunkType => async (dispatch) => {
   const status = await profileAPI.getStatus(userId)

   dispatch(profileActions.setUserStatus(status))
}

export const updateUserStatusThunkCreator = (status: string): ThunkType => async (dispatch) => {
   const response = await profileAPI.updateStatus(status)

   if (response.statusText === 'OK') {
      dispatch(profileActions.setUserStatus(status))
   }
}

export const setAvatarThunkCreator = (avatar: any): ThunkType => async (dispatch) => {
   const response = await profileAPI.setAvatar(avatar)

   if (response.statusText === 'OK') {
      dispatch(profileActions.setAvatar(avatar))
   }
}

export const updateProfileData = (profile: ProfileType | null): ThunkType => async (dispatch, getState) => {

   const userId = getState().auth.id
   const response = await profileAPI.updateProfileData(profile)

   if (response.statusText === 'OK') {
      dispatch(getUserProfilThunkCreator(userId))
   }
   else {
      dispatch(stopSubmit("edit-profile", { _error: "response Error" }))
      // dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }))
      // return Promise.reject(response.data.messages[0])

   }
}

export default profileReducer