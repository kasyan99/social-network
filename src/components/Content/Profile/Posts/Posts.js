import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import { actionCreaterAddPost, actionCreaterUpdatePostText } from '../../../../reduxF/store';

function Posts(props) {
   const posts = (props) => {
      return (props.profile.posts.map(
         post => <Post post={post} />
      ))
   }

   const newPost = React.createRef()

   const addPost = () => {
      props.dispatch(actionCreaterAddPost())
   }

   const updatePostText = () => {
      const newPostText = newPost.current.value
      const action = actionCreaterUpdatePostText(newPostText)
      props.dispatch(action)
   }

   return (
      <div className={classes.posts}>
         <h3>My posts</h3>
         <div className={classes.poss__box}>
            <textarea
               ref={newPost}
               onChange={updatePostText}
               placeholder="new post text..."
               value={props.profile.newPostText}
            />
            <button onClick={addPost} className='btn'>Add post</button>
         </div>
         {posts(props)}
      </div>
   )
}

export default Posts;