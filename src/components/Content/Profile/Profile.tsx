import React from 'react';
import { ProfileType } from '../../../types/types';
import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type PropsType = {
   profile: ProfileType
   status: string
   updateUserStatus: (staus: string) => void
   owner: boolean
   setAvatar: (src: string) => void
   updateProfileData: (profile: ProfileType) => Promise<void>
}

function Profile(props) {
   return (
      <div className={classes.profile}>
         <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} owner={props.owner} setAvatar={props.setAvatar} updateProfileData={props.updateProfileData} />
         <PostsContainer />
      </div>
   )
}

export default Profile;