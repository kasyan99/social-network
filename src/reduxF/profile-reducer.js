const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const initialState = {
   posts: [
      { id: 1, text: 'today is a first day of react', likes: 20 },
      { id: 2, text: 'weekend!!!', likes: 3 },
      { id: 3, text: 'close the sky!', likes: 65 },
      { id: 4, text: 'go to the party!', likes: 5 },
   ],
   newPostText: ''
}

function profileReducer(state = initialState, action) {
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


export const actionCreaterAddPost = () => ({ type: ADD_POST })
export const actionCreaterUpdatePostText = (newPostText) => ({ type: UPDATE_POST_TEXT, newPostText })

export default profileReducer