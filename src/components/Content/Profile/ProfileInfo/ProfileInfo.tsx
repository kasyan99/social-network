import React, { useState } from "react";
import Preloader from "../../../common/Preloader";
import classes from './ProfileInfo.module.css';
import ProfilStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";
import { ProfileType } from "../../../../types/types";
import { PropsType } from "../Profile";



const ProfileInfo: React.FC<PropsType> = ({ profile, status, updateUserStatus, owner, setAvatar, updateProfileData }) => {

   const [editMode, setEditMode] = useState(false)

   const onSubmit = (formData: ProfileType) => {
      updateProfileData(formData).then(() => {
         setEditMode(false)
      })
   }
   if (!profile) {
      return <Preloader />
   }

   const ProfileData: React.FC<{ profile: ProfileType }> = ({ profile }) => {
      return <div>
         <ul>
            <li><span>Age: </span>{profile.age}</li>
            <li><span>Country: </span>{profile.location.country}</li>
            <li><span>City: </span>{profile.location.city}</li>
            <li><span>Contacts:</span>
               <Contacts profile={profile} />
            </li>
         </ul>
      </div>
   }

   const Contacts: React.FC<{ profile: ProfileType }> = ({ profile }) => {
      const names = Object.getOwnPropertyNames(profile.contacts)
      let key = 1
      const contacts = names.map(name => <li key={key++}><span>{name}: </span>{profile.contacts[name]}</li>)

      return <ul>
         {contacts}
      </ul>
   }


   return (
      <div>
         <h2>{profile.fullName}</h2>
         <ProfilStatus status={status} updateUserStatus={updateUserStatus} owner={owner} />
         <div className={classes.profile__describe}>
            <div className={classes.img}>
               <img src={profile.avatar || 'https://www.kindpng.com/picc/m/106-1068191_transparent-avatar-clipart-hd-png-download.png'} alt='avatar'></img>
            </div>
            <div className={classes.profile__data}>
               {owner &&
                  <button onClick={() => setEditMode(!editMode)} className='btn btn-small'>edit</button>}
               {editMode
                  ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
                  : <ProfileData profile={profile} />}
            </div>
         </div>
      </div>
   )
}


export default ProfileInfo