import profileReducer, { actionCreatorAddPost, deletePost } from "./profile-reducer";

const initialState = {
   posts: [
      { id: 1, text: 'today is a first day of react', likes: 20 },
      { id: 2, text: 'weekend!!!', likes: 3 },
      { id: 3, text: 'close the sky!', likes: 65 },
      { id: 4, text: 'go to the party!', likes: 5 },
   ],
}

it('lenght post should be 5', () => {
   const action = actionCreatorAddPost("test post")
   const newState = profileReducer(initialState, action)

   expect(newState.posts.length).toBe(5)
})

it('post item', () => {
   const action = actionCreatorAddPost("test post")
   const newState = profileReducer(initialState, action)

   expect(newState.posts[4]).toStrictEqual({ id: 6, text: 'test post', likes: 0 })
})

it('after deleting lenght post should be 3', () => {
   const action = deletePost(1)
   const newState = profileReducer(initialState, action)

   expect(newState.posts.length).toBe(3)
})
