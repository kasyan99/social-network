import { connect } from "react-redux";
import { actionCreatorCurrentPage, actionCreatorFollowt, actionCreatorSetUsers, actionCreatorUnfollow, actionCreatorSetTotalUsersCount, actionCreatorToggleIsFetching, actionCreatorToggleIsFollowing } from "../../../reduxF/users-reducer";
import Users from "./Users";
import React from "react"
// import * as axios from 'axios'
import { usersAPI } from "../../../api/api";

class UsersAJAXContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)

      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(response => {
            console.log(response);
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.users)
            this.props.setTotalUsersCount(response.totalCount)
         })

   }
   setCurrentPage = number => {
      this.props.setCurrentPage(number)
      this.props.toggleIsFetching(true)
      usersAPI.getUsers(number, this.props.pageSize)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.users)
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
         toggleIsFollowing={this.props.toggleIsFollowing}
         followingInProgress={this.props.followingInProgress}
      />
   }
}

const mapStateToProps = (state) => {
   return {
      usersList: state.users.usersList,
      pageSize: state.users.pageSize,
      usersCount: state.users.usersCount,
      currentPage: state.users.currentPage,
      isFetching: state.users.isFetching,
      followingInProgress: state.users.followingInProgress
   }
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(actionCreatorFollowt(userId))
//       },
//       unfollow: (userId) => {
//          dispatch(actionCreatorUnfollow(userId))
//       },
//       setUsers: (usersList) => {
//          dispatch(actionCreatorSetUsers(usersList))
//       },
//       setCurrentPage: (currentPage) => {
//          dispatch(actionCreatorCurrentPage(currentPage))
//       },
//       setTotalUsersCount: (totalUsersCount) => {
//          dispatch(actionCreatorSetTotalUsersCount(totalUsersCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(actionCreatorToggleIsFetching(isFetching))
//       }
//    }
// }

const mapDispatchToProps = {
   follow: actionCreatorFollowt,
   unfollow: actionCreatorUnfollow,
   setUsers: actionCreatorSetUsers,
   setCurrentPage: actionCreatorCurrentPage,
   setTotalUsersCount: actionCreatorSetTotalUsersCount,
   toggleIsFetching: actionCreatorToggleIsFetching,
   toggleIsFollowing: actionCreatorToggleIsFollowing
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAJAXContainer)

export default UsersContainer