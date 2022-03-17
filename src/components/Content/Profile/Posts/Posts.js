import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';

function Posts(props) {
   const posts = (props) => {
      return (props.profile.posts.map(
         post => <Post post={post} />
      ))
   }

   const newPost = React.createRef()

   const addPost = () => {
      props.addPost()
   }

   const updateTextarea = () => {
      const newPostText = newPost.current.value
      props.updatePostText(newPostText)
   }

   return (
      <div className={classes.posts}>
         <h3>My posts</h3>
         <div className={classes.poss__box}>
            <textarea
               ref={newPost}
               onChange={updateTextarea}
               placeholder="new post text..."
               value={props.profile.newPostText}
            />
            <button onClick={addPost}>Add post</button>
         </div>
         {posts(props)}
      </div>
   )
}

export default Posts;