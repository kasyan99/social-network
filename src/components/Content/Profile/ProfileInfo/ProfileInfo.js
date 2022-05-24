import React from "react";
import Preloader from "../../../common/Preloader";
import classes from './ProfileInfo.module.css';
import ProfilStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateUserStatus, owner, setAvatar }) => {
   const f = (e) => {
      console.log(e.target.files[0]);
      setAvatar('https://scontent.fiev15-1.fna.fbcdn.net/v/t1.18169-9/10480620_510162065778072_5757080448610267899_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=jzBUy9drvSYAX-GCmJK&_nc_ht=scontent.fiev15-1.fna&oh=00_AT-tplq3a0imb0j3b96u8ftLK26pVsms069QwtkLjDh8GA&oe=62B1E628')
      // setAvatar(e.target.files[0])

   }
   if (!profile) {
      return <Preloader />
   }
   return (
      <div>
         <h2>{profile.fullName}</h2>
         <ProfilStatus status={status} updateUserStatus={updateUserStatus} />
         <div className={classes.profile__describe}>
            <div className={classes.img}>
               {owner &&
                  <input type={'file'} onChange={f} />}
               <img src={profile.avatar || 'https://www.kindpng.com/picc/m/106-1068191_transparent-avatar-clipart-hd-png-download.png'} alt='avatar'></img>
            </div>
            <p>Founded “The League of laughter” NGO. Produced 10 feature length movies, won more than 30 awards of the National Television Award of Ukraine "Teletriumph”. President Zelenskyy is a prize-winner of numerous international film festivals and media forums.
               From the outset of the hostilities in Donbas Volodymyr Zelenskyy and “KVARTAL 95” rendered support to the Armed Forces with funds, equipment and arranged shows on the front line and in different military units.
               Married to Mrs Olena Zelenska, with 2 children - daughter Oleksandra and son Kyrylo.
            </p>
         </div>
      </div>
   )
}

export default ProfileInfo