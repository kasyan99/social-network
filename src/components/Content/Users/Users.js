import React from "react"
import User from "./User/User"
import classes from './Users.module.css'


function Users(props) {
   if (props.usersList.length === 0) {
      props.setUsers([
         { id: 1, fullName: 'Nikolay', status: 'I am loking for a job', location: { city: 'Yellow Water', country: 'Ukraine' }, followed: true },
         { id: 2, fullName: 'Nikita', status: 'I sell grass', location: { city: 'Kyiv', country: 'Ukraine' }, followed: false },
         { id: 3, fullName: 'Yana', status: 'I will become an engineer', location: { city: 'Trier', country: 'German' }, followed: true },
         { id: 4, fullName: 'Yosyp', status: 'Potato is gold', location: { city: 'Cheremyshka', country: 'Belorysia' }, followed: false },
      ])
   }
   return (
      <div className={classes.users}>
         {props.usersList.map(user =>
            <User
               user={user}
               key={user.id}
               follow={props.follow}
               unfollow={props.unfollow}
            />)}
      </div>
   )
}

export default Users