import React from "react"
import { NavLink } from "react-router-dom"
import { ProfileType } from "../../../../types/types"
import classes from './User.module.css'

type Props = {
   user: ProfileType
   follow: (id: number) => void
   followToggle: (user: ProfileType) => void
   followingInProgress: Array<number>
   getUsers: (currentPage: number, pageSize: number) => void
   isFetching: boolean
   toggleIsFollowing: (isFetching: boolean, userId: number) => void
   unfollow: (id: number) => void
   usersList: Array<ProfileType>
}

const User: React.FC<Props> = ({ user, ...props }) => {

   const imgSrc = user.avatar || "https://img2.freepng.ru/20180421/lyw/kisspng-computer-icons-avatar-clip-art-5adb009b938864.3066118615243019796043.jpg"
   const followedClass = 'btn ' + (user.followed ? classes.unfollow : classes.follow)

   return (
      <div className={classes.user}>
         <div className={classes.user__header}>
            <NavLink to={`/profile/${user.id}`}>
               <img src={imgSrc} alt="avatar" />
            </NavLink>

            <button
               disabled={props.followingInProgress.some(id => id === user.id)}
               className={followedClass}
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