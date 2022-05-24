import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
   return (
      <div className={classes.profile}>
         <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} owner={props.owner} setAvatar={props.setAvatar} />
         <PostsContainer />
      </div>
   )
}

export default Profile;