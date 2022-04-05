import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
   return (
      <div className={classes.profile}>
         <ProfileInfo profile={props.profile} />
         <PostsContainer />
      </div>
   )
}

export default Profile;