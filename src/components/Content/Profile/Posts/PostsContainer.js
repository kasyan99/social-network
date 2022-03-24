import React from 'react';
import { actionCreaterAddPost, actionCreaterUpdatePostText } from '../../../../reduxF/store';
import Posts from './Posts';

function PostsContainer(props) {

   const addPost = () => {
      props.dispatch(actionCreaterAddPost())
   }

   const updatePostText = (newPostText) => {
      const action = actionCreaterUpdatePostText(newPostText)
      props.dispatch(action)
   }

   return <Posts
      posts={props.profile.posts}
      newPostText={props.profile.newPostText}
      addPost={addPost}
      updatePostText={updatePostText}
   />
}



// let mapStateToProps = (state) => {
//    return {
//       posts: state.profile.posts,
//       newPostText: state.profile.newPostText
//    }
// }

// let mapDispatchToProps = (dispatch) => {
//    return {
//       addPost() {
//          dispatch(actionCreaterAddPost())
//       },
//       updatePostText(e) {
//          const newPostText = e.target.value
//          const action = actionCreaterUpdatePostText(newPostText)
//          dispatch(action)

//       }
//    }
// }

// const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer