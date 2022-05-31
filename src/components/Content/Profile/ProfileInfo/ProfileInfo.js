import React, { useState } from "react";
import Preloader from "../../../common/Preloader";
import classes from './ProfileInfo.module.css';
import ProfilStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({ profile, status, updateUserStatus, owner, setAvatar, updateProfileData }) => {

   const [editMode, setEditMode] = useState(false)

   const f = (e) => {
      console.log(e.target.files[0]);
      setAvatar('https://scontent.fiev15-1.fna.fbcdn.net/v/t1.18169-9/10480620_510162065778072_5757080448610267899_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=jzBUy9drvSYAX-GCmJK&_nc_ht=scontent.fiev15-1.fna&oh=00_AT-tplq3a0imb0j3b96u8ftLK26pVsms069QwtkLjDh8GA&oe=62B1E628')
      // setAvatar(e.target.files[0])
   }

   const onSubmit = (formData) => {
      console.log(formData)
      setEditMode(false)
      updateProfileData(formData)
   }
   if (!profile) {
      return <Preloader />
   }

   const ProfileData = ({ profile }) => {
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

   const Contacts = ({ profile }) => {
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
               {owner &&
                  <input className={classes.avatar} type={'file'} onChange={f} />}
               <img src={profile.avatar || 'https://www.kindpng.com/picc/m/106-1068191_transparent-avatar-clipart-hd-png-download.png'} alt='avatar'></img>
            </div>
            <div className={classes.profile__data}>
               {owner &&
                  <button onClick={() => setEditMode(!editMode)}>edit</button>}
               {editMode
                  ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} />
                  : <ProfileData profile={profile} />}
            </div>
         </div>
      </div>
   )
}


export default ProfileInfo