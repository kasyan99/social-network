import React from 'react';
import { actionCreaterAddPost, actionCreaterUpdatePostText } from '../../../../reduxF/profile-reducer';
import StoreContext from '../../../../StoreContext';
import Posts from './Posts';

function PostsContainer() {
   return (
      <StoreContext.Consumer>
         {(store) => {

            const profile = store.getState().profile
            const dispatch = store.dispatch.bind(store)

            const addPost = () => {
               dispatch(actionCreaterAddPost())
            }

            const updatePostText = (newPostText) => {
               const action = actionCreaterUpdatePostText(newPostText)
               dispatch(action)
            }

            return <Posts
               posts={profile.posts}
               newPostText={profile.newPostText}
               addPost={addPost}
               updatePostText={updatePostText}
            />
         }
         }
      </StoreContext.Consumer>
   )
}

export default PostsContainer