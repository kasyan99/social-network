import { stopSubmit } from "redux-form"
import { profileAPI } from "../api/api"
import { Post, ProfileType } from "../types/types"

const ADD_POST = 'social-network/profile/ADD-POST'
const UPDATE_POST_TEXT = 'social-network/profile/UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE'
const SET_USER_STATUS = 'social-network/profile/SET-USER-STATUS'
const DELETE_POST = 'social-network/profile/DELETE-POST'
const SET_AVATAR = 'social-network/profile/SET-AVATAR'


type InitialStateType = {
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

function profileReducer(state = initialState, action: any): InitialStateType {

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

type SetUserProfileType = {
   type: typeof SET_USER_PROFILE
   profile: ProfileType | null
}

export const setUserProfile = (profile: ProfileType | null): SetUserProfileType => ({ type: SET_USER_PROFILE, profile })

type ActionCreatorAddPostType = {
   type: typeof ADD_POST
   newPostText: string
}

export const actionCreatorAddPost = (newPostText: string): ActionCreatorAddPostType => ({ type: ADD_POST, newPostText })

type ActionCreatorUpdatePostTextType = {
   type: typeof UPDATE_POST_TEXT
   newPostText: string
}

export const actionCreatorUpdatePostText = (newPostText: string): ActionCreatorUpdatePostTextType => ({ type: UPDATE_POST_TEXT, newPostText })

type SetUserStatusType = {
   type: typeof SET_USER_STATUS
   status: string
}

export const setUserStatus = (status: string): SetUserStatusType => ({ type: SET_USER_STATUS, status })

type SetAvatarType = {
   type: typeof SET_AVATAR
   avatar: any
}

export const setAvatar = (avatar: any): SetAvatarType => ({ type: SET_AVATAR, avatar })
//for test:
type DeletePostType = {
   type: typeof DELETE_POST
   id: number
}
export const deletePost = (id: number): DeletePostType => ({ type: DELETE_POST, id })

export const getUserProfilThunkCreator = (userId: number) => async (dispatch: any) => {
   const profileInfo = await profileAPI.getProfileInfo(userId)

   dispatch(setUserProfile(profileInfo))
}

export const getUserStatusThunkCreator = (userId: number) => async (dispatch: any) => {
   const status = await profileAPI.getStatus(userId)

   dispatch(setUserStatus(status))
}

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: any) => {
   const response = await profileAPI.updateStatus(status)

   if (response.statusText === 'OK') {
      dispatch(setUserStatus(status))
   }
}

export const setAvatarThunkCreator = (avatar: any) => async (dispatch: any) => {
   const response = await profileAPI.setAvatar(avatar)

   if (response.statusText === 'OK') {
      dispatch(setAvatar(avatar))
   }
}

export const updateProfileData = (profile: ProfileType | null) => async (dispatch: any, getState: any) => {

   const userId = getState().auth.id
   const response = await profileAPI.updateProfileData(profile)
   console.log(response);
   if (response.statusText === 'OK') {
      dispatch(getUserProfilThunkCreator(userId))
   } else {
      dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }))
      // return Promise.reject(response.data.messages[0])
   }
}

export default profileReducer