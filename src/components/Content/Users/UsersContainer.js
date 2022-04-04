import { connect } from "react-redux";
import { actionCreatorCurrentPage, actionCreatorFollowt, actionCreatorSetUsers, actionCreatorUnfollow, actionCreatorSetTotalUsersCount, actionCreatorToggleFetch } from "../../../reduxF/users-reducer";
import Users from "./Users";
import React from "react"
import * as axios from 'axios'

class UsersAJAXContainer extends React.Component {

   componentDidMount() {
      this.props.toggleFetch(true)
      axios
         .get(`http://localhost:3000/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleFetch(false)
            this.props.setUsers(response.data)
            this.props.setTotalUsersCount(response.headers['x-total-count'])
         })
   }
   setCurrentPage = number => {
      this.props.toggleFetch(true)
      this.props.setCurrentPage(number)
      axios
         .get(`http://localhost:3000/users?_page=${number}&_limit=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleFetch(false)
            this.props.setUsers(response.data)
         })
   }
   render() {
      return <Users
         setCurrentPage={this.setCurrentPage}
         currentPage={this.props.currentPage}
         usersCount={this.props.usersCount}
         pageSize={this.props.pageSize}
         usersList={this.props.usersList}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
         isFetching={this.props.isFetching}
      />
   }
}

const mapStateToProps = (state) => {
   return {
      usersList: state.users.usersList,
      pageSize: state.users.pageSize,
      usersCount: state.users.usersCount,
      currentPage: state.users.currentPage,
      isFetching: state.users.isFetching
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(actionCreatorFollowt(userId))
      },
      unfollow: (userId) => {
         dispatch(actionCreatorUnfollow(userId))
      },
      setUsers: (usersList) => {
         dispatch(actionCreatorSetUsers(usersList))
      },
      setCurrentPage: (currentPage) => {
         dispatch(actionCreatorCurrentPage(currentPage))
      },
      setTotalUsersCount: (totalUsersCount) => {
         dispatch(actionCreatorSetTotalUsersCount(totalUsersCount))
      },
      toggleFetch: (isFetching) => {
         dispatch(actionCreatorToggleFetch(isFetching))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAJAXContainer)

export default UsersContainer