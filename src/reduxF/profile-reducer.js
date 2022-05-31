import { stopSubmit } from "redux-form"
import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'social-network/profile/ADD-POST'
const UPDATE_POST_TEXT = 'social-network/profile/UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE'
const SET_USER_STATUS = 'social-network/profile/SET-USER-STATUS'
const DELETE_POST = 'social-network/profile/DELETE-POST'
const SET_AVATAR = 'social-network/profile/SET-AVATAR'

const initialState = {
   profile: null,
   posts: [
      { id: 1, text: 'today is a first day of react', likes: 20 },
      { id: 2, text: 'weekend!!!', likes: 3 },
      { id: 3, text: 'close the sky!', likes: 65 },
      { id: 4, text: 'go to the party!', likes: 5 },
   ],
   status: ''
}

function profileReducer(state = initialState, action) {

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

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const actionCreatorAddPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const actionCreatorUpdatePostText = (newPostText) => ({ type: UPDATE_POST_TEXT, newPostText })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setAvatar = (avatar) => ({ type: SET_AVATAR, avatar })
//for test:
export const deletePost = (id) => ({ type: DELETE_POST, id })

export const getUserProfilThunkCreator = (userId) => async (dispatch) => {
   const profileInfo = await usersAPI.getProfileInfo(userId)

   dispatch(setUserProfile(profileInfo))
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
   const status = await profileAPI.getStatus(userId)

   dispatch(setUserStatus(status))
}

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
   const response = await profileAPI.updateStatus(status)

   if (response.statusText === 'OK') {
      dispatch(setUserStatus(status))
   }
}

export const setAvatarThunkCreator = (avatar) => async (dispatch) => {
   const response = await profileAPI.setAvatar(avatar)

   if (response.statusText === 'OK') {
      dispatch(setAvatar(avatar))
   }
}

export const updateProfileData = (profile) => async (dispatch, getState) => {

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