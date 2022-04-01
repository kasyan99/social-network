import React from "react"
import User from "./User/User"
import classes from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {
   componentDidMount() {
      axios
         .get(`http://localhost:3000/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
         .then(response => {
            console.log(response);
            this.props.setUsers(response.data)
            this.props.setTotalUsersCount(response.headers['x-total-count'])
         })
   }
   setCurrentPage(number) {
      this.props.setCurrentPage(number)
      axios
         .get(`http://localhost:3000/users?_page=${number}&_limit=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data)
         })
   }
   render() {
      const pageCount = Math.ceil(this.props.usersCount / this.props.pageSize)
      const pageNumbers = []

      for (let i = 1; i <= pageCount; i++) {
         pageNumbers.push(i)
      }

      return (
         <div className={classes.users}>
            <div>
               {pageNumbers.map(number =>
                  <span
                     className={this.props.currentPage === number ? classes.selectedPage : ''}
                     key={number}
                     onClick={() => this.setCurrentPage(number)}
                  >
                     {number}
                  </span>
               )}
            </div>
            {this.props.usersList.map(user =>
               <User
                  user={user}
                  key={user.id}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
               />)}
         </div>
      )
   }
}
export default Users