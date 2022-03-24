import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';

function Posts(props) {

   const posts = () => {
      return (props.posts.map(
         post => <Post post={post} key={post.id} />
      ))
   }

   const newPost = React.createRef()

   const addPost = () => {
      props.addPost()
   }

   const updatePostText = () => {
      const newPostText = newPost.current.value
      props.updatePostText(newPostText)
   }

   return (
      <div className={classes.posts}>
         <h3>My posts</h3>
         <div className={classes.poss__box}>
            <textarea
               ref={newPost}
               onChange={updatePostText}
               placeholder="new post text..."
               value={props.newPostText}
            />
            <button onClick={addPost} className='btn'>Add post</button>
         </div>
         {posts(props)}
      </div>
   )
}

export default Posts;