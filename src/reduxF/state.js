const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

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
         ]
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
      if (action.type === 'ADD-POST') {
         return this.addPost(action.text)
      } else if (action.type === 'UPDATE-POST-TEXT') {
         return this.updatePostText(action.newText)
      }
   },

   updatePostText(newText) {
      this._state.profile.newPostText = newText
      this._callSubscriber(this._state)
   },

   addPost() {
      const post = {
         id: 6,
         text: this._state.profile.newPostText,
         likes: 0
      }

      this._state.profile.posts.push(post)
      this._callSubscriber(this._state)
      this._state.profile.newPostText = ''
   },

}

export const actionCreaterAddPost = () => ({ type: ADD_POST })
export const actionCreaterUpdatePostText = (newText) => ({ type: UPDATE_POST_TEXT, newText })

export default store

