import React from "react";
import Preloader from "../../../common/Preloader";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         {/* <h2>Volodymyr Zelensky</h2> */}
         <h2>{props.profile.fullName}</h2>
         <div className={classes.profile__describe}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEo66CowBhbSrmRxFjfH03CPDaoF7--bUBuQ&usqp=CAU" alt='avatar'></img>
            <p>Founded “The League of laughter” NGO. Produced 10 feature length movies, won more than 30 awards of the National Television Award of Ukraine "Teletriumph”. President Zelenskyy is a prize-winner of numerous international film festivals and media forums.
               From the outset of the hostilities in Donbas Volodymyr Zelenskyy and “KVARTAL 95” rendered support to the Armed Forces with funds, equipment and arranged shows on the front line and in different military units.
               Married to Mrs Olena Zelenska, with 2 children - daughter Oleksandra and son Kyrylo.
            </p>
         </div>
      </div>
   )
}

export default ProfileInfo