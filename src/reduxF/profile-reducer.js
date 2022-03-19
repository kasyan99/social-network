const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

function profileReducer(state, action) {
   if (action.type === ADD_POST) {
      const post = {
         id: 6,
         text: state.newPostText,
         likes: 0
      }

      state.posts.push(post)
      state.newPostText = ''
   } else if (action.type === UPDATE_POST_TEXT) {
      state.newPostText = action.newPostText
   }

   return state
}

export default profileReducer