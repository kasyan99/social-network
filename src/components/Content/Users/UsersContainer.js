import { connect } from "react-redux";
import { actionCreatorCurrentPage, actionCreatorFollowt, actionCreatorUnfollow, actionCreatorToggleIsFollowing, getUsersThunkCreator, followToggleThunkCreator } from "../../../reduxF/users-reducer";
import Users from "./Users";
import React from "react"
import { getCurrentPage, getDisplayedPagePortion, getFollowingInProgress, getIsFetching, getPageSize, getUsersCount, getUsersList } from "../../../reduxF/users-selectors";

class UsersAJAXContainer extends React.Component {

   componentDidMount() {
      const { currentPage, pageSize } = this.props
      this.props.getUsers(currentPage, pageSize)

   }
   setCurrentPage = pageNumber => {
      const { pageSize } = this.props
      this.props.getUsers(pageNumber, pageSize)
   }
   render() {
      return <Users
         {...this.props}
         setCurrentPage={this.setCurrentPage}
      />
   }
}


const mapStateToProps = (state) => {
   return {
      usersList: getUsersList(state),
      pageSize: getPageSize(state),
      usersCount: getUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
      displayedPagePortion: getDisplayedPagePortion(state)
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