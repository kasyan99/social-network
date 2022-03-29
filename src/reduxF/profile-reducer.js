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
      default:
         return state
   }
}

export const actionCreatorAddPost = () => ({ type: ADD_POST })
export const actionCreatorUpdatePostText = (newPostText) => ({ type: UPDATE_POST_TEXT, newPostText })

export default profileReducer