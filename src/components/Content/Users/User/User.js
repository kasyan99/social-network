// import axios from "axios"
import React from "react"
import { NavLink } from "react-router-dom"
// import { usersAPI } from "../../../../api/api"
import classes from './User.module.css'

function User(props) {
   // const unfollow = (id) => {
   //    usersAPI.unfollow(id).then(response => {
   //       console.log(response.data);
   //       if (response.statusText === 'OK') {
   //          props.unfollow(id)
   //       }
   //       props.toggleIsFollowing(false, id)
   //    })
   // }
   // const follow = (id) => {
   //    usersAPI.follow(id).then(response => {
   //       console.log(response.data);
   //       if (response.statusText === 'OK') {
   //          props.follow(id)
   //       }
   //       props.toggleIsFollowing(false, id)
   //    })
   // }

   const user = props.user
   return (
      <div className={classes.user}>
         <div className={classes.user__header}>
            <NavLink to={`/profile/${user.id}`}>
               <img src="data:image/jpeg;base64,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" alt="avatar" />
            </NavLink>

            <button
               disabled={props.followingInProgress.some(id => id === user.id)}
               className={`btn ${user.followed ? classes.unfollow : classes.follow}`}
               // onClick={() => {
               //    props.toggleIsFollowing(true, user.id)
               //    user.followed
               //       ? unfollow(user.id)
               //       : follow(user.id)
               // }}
               onClick={() => { props.followToggle(user) }}
            >
               {user.followed ? 'Unfollow' : 'Follow'}
            </button>
         </div>
         <div className={classes.user__body}>
            <div className={classes.user__info}>
               <span className={classes.info__name}>{user.fullName}</span>
               <span className={classes.info__location}>{`${user.location.city}, ${user.location.country}`}</span>
            </div>
            <p className={classes.user__status}>
               {user.status}
            </p>
         </div>
      </div>
   )
}

export default User