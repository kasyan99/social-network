import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

const ProfileForm = (props) => {
   return (
      <form className={classes.posts__box} onSubmit={props.handleSubmit}>
         <Field placeholder="new post text..." component={"textarea"} name={"newPostText"} />
         <button className='btn'>Add post</button>
      </form>
   )
}

const ProfileFormRedux = reduxForm({
   form: 'profileForm'
})(ProfileForm)
const Posts = (props) => {

   const posts = () => {
      return (props.posts.map(
         post => <Post post={post} key={post.id} />
      ))
   }

   const addPost = (newPostText) => {
      props.addPost(newPostText)
   }

   const onSubmit = (formData) => {
      addPost(formData.newPostText)
      formData.newPostText = ''
   }

   return (
      <div className={classes.posts}>
         <h3>My posts</h3>
         <ProfileFormRedux onSubmit={onSubmit} />
         {posts(props)}
      </div>
   )
}

export default Posts;