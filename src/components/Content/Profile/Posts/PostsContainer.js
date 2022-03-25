// import React from 'react';
import { actionCreaterAddPost, actionCreaterUpdatePostText } from '../../../../reduxF/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux'

// function PostsContainer() {
//    return (
//       <StoreContext.Consumer>
//          {(store) => {

//             const profile = store.getState().profile
//             const dispatch = store.dispatch.bind(store)

//             const addPost = () => {
//                dispatch(actionCreaterAddPost())
//             }

//             const updatePostText = (newPostText) => {
//                const action = actionCreaterUpdatePostText(newPostText)
//                dispatch(action)
//             }

//             return <Posts
//                posts={profile.posts}
//                newPostText={profile.newPostText}
//                addPost={addPost}
//                updatePostText={updatePostText}
//             />
//          }
//          }
//       </StoreContext.Consumer>
//    )
// }

const mapStateToProps = (state) => {
   return {
      posts: state.profile.posts,
      newPostText: state.profile.newPostText,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(actionCreaterAddPost())
      },
      updatePostText: (newPostText) => {
         const action = actionCreaterUpdatePostText(newPostText)
         dispatch(action)
      }
   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer