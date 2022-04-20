import { connect } from "react-redux";
import { actionCreatorCurrentPage, actionCreatorFollowt, actionCreatorUnfollow, actionCreatorToggleIsFollowing, getUsersThunkCreator, followToggleThunkCreator } from "../../../reduxF/users-reducer";
import Users from "./Users";
import React from "react"

class UsersAJAXContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)

   }
   setCurrentPage = pageNumber => {
      this.props.getUsers(pageNumber, this.props.pageSize)
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
         followToggle={this.props.followToggle}
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

const mapDispatchToProps = {
   follow: actionCreatorFollowt,
   unfollow: actionCreatorUnfollow,
   setCurrentPage: actionCreatorCurrentPage,
   toggleIsFollowing: actionCreatorToggleIsFollowing,
   getUsers: getUsersThunkCreator,
   followToggle: followToggleThunkCreator
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAJAXContainer)

export default UsersContainer