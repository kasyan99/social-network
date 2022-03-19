import asideReducer from "./aside-reducer"
import messagesReducer from "./messsages-reducer"
import profileReducer from "./profile-reducer"

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const store = {

   _state: {
      profile: {
         posts: [
            { id: 1, text: 'today is a first day of react', likes: 20 },
            { id: 2, text: 'weekend!!!', likes: 3 },
            { id: 3, text: 'close the sky!', likes: 65 },
            { id: 4, text: 'go to the party!', likes: 5 },
         ],
         newPostText: ''
      },
      massages: {
         contactsList: [
            { id: 1, name: 'Nikolay' },
            { id: 2, name: 'Vlad' },
            { id: 3, name: 'Dima' },
            { id: 4, name: 'Yana' },
            { id: 5, name: 'Katia' },
         ],
         messagesList: [
            { id: 1, text: 'Hello', my: false },
            { id: 2, text: 'What areayou doing', my: true },
            { id: 3, text: 'Nothing', my: false },
            { id: 3, text: 'Ok', my: true },
            { id: 3, text: ')))))', my: false },
            { id: 3, text: 'Bye', my: true },
         ],
         newMessageText: ''
      },
      aside: {
         menuList: [
            { linkName: 'Profile', linkPath: '/profile' },
            { linkName: 'Messages', linkPath: '/messages' },
            { linkName: 'Photos', linkPath: '/photos' },
            { linkName: 'Music', linkPath: '/music' },
            { linkName: 'Settings', linkPath: '/settings' },
         ]
      }
   },
   _callSubscriber() {

   },
   getState() {
      return this._state
   },

   subscribe(observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      this._state.profile = profileReducer(this._state.profile, action)
      this._state.massages = messagesReducer(this._state.massages, action)
      this._state.aside = asideReducer(this._state.aside, action)

      this._callSubscriber(this._state)
   },
}

export const actionCreaterAddPost = () => ({ type: ADD_POST })
export const actionCreaterUpdatePostText = (newPostText) => ({ type: UPDATE_POST_TEXT, newPostText })

export const actionCreaterAddMessage = () => ({ type: ADD_MESSAGE })
export const actionCreaterUpdateMessageText = (newMessageText) => ({ type: UPDATE_MESSAGE_TEXT, newMessageText })

export default store

