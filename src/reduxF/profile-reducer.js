import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

const initialState = {
   profile: null,
   posts: [
      { id: 1, text: 'today is a first day of react', likes: 20 },
      { id: 2, text: 'weekend!!!', likes: 3 },
      { id: 3, text: 'close the sky!', likes: 65 },
      { id: 4, text: 'go to the party!', likes: 5 },
   ],
   newPostText: '',
   status: ''
}

function profileReducer(state = initialState, action) {

   switch (action.type) {
      case ADD_POST:
         const post = {
            id: 6,
            text: state.newPostText,
            likes: 0
         }
         return {
            ...state,
            posts: [...state.posts, post],
            newPostText: ''
         }
      case UPDATE_POST_TEXT:
         return {
            ...state,
            newPostText: action.newPostText
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
      default:
         return state
   }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const actionCreatorAddPost = () => ({ type: ADD_POST })
export const actionCreatorUpdatePostText = (newPostText) => ({ type: UPDATE_POST_TEXT, newPostText })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserProfilThunkCreator = (userId) => {
   return (dispatch) => {
      usersAPI.getProfileInfo(userId)
         .then(profileInfo => { dispatch(setUserProfile(profileInfo)) })
   }
}

export const getUserStatusThunkCreator = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId)
         .then(status => { dispatch(setUserStatus(status)) })

   }
}

export const updateUserStatusThunkCreator = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(2, status)
         .then(response => {
            if (response.statusText === 'OK') {
               dispatch(setUserStatus(status))
            }
         })
   }
}

export default profileReducer