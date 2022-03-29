import React from "react"
import User from "./User/User"
import classes from './Users.module.css'


function Users(props) {
   return (
      <div className={classes.users}>
         {props.usersList.map(user => <User user={user} key={user.id} dispatch={props.dispatch} />)}
      </div>
   )
}

export default Users