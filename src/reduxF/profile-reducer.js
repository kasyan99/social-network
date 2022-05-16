import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'
const DELETE_POST = 'DELETE-POST'

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
            posts: state.posts.filter(p => p.id != action.id)
         }
      default:
         return state
   }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const actionCreatorAddPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const actionCreatorUpdatePostText = (newPostText) => ({ type: UPDATE_POST_TEXT, newPostText })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
//for test:
export const deletePost = (id) => ({ type: DELETE_POST, id })

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
      profileAPI.updateStatus(status)
         .then(response => {
            if (response.statusText === 'OK') {
               dispatch(setUserStatus(status))
            }
         })
   }
}

export default profileReducer