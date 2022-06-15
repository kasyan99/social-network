import { connect } from "react-redux";
import { actionCreatorCurrentPage, actionCreatorFollowt, actionCreatorUnfollow, actionCreatorToggleIsFollowing, getUsersThunkCreator, followToggleThunkCreator } from "../../../reduxF/users-reducer";
import Users from "./Users";
import React from "react"
import { getCurrentPage, getDisplayedPagePortion, getFollowingInProgress, getIsFetching, getPageSize, getUsersCount, getUsersList } from "../../../reduxF/users-selectors";
import { ProfileType } from "../../../types/types";
import { AppStateType } from "../../../reduxF/redux-store";


type UsersMapStateToPropsType = {
   usersList: Array<ProfileType>
   pageSize: number
   usersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: Array<number>
   displayedPagePortion: number
}

type UsersMapDispatchToPropsType = {
   follow: (id: number) => void
   unfollow: (id: number) => void
   setCurrentPage: (number: number) => void
   toggleIsFollowing: (isFetching: boolean, userId: number) => void
   getUsers: (currentPage: number, pageSize: number) => void
   followToggle: (user: ProfileType) => void
}

export type PropsUsersType = UsersMapStateToPropsType & UsersMapDispatchToPropsType
// export type PropsUsersType = {
//    usersList: Array<ProfileType>
//    pageSize: number
//    usersCount: number
//    currentPage: number
//    isFetching: boolean
//    followingInProgress: boolean
//    displayedPagePortion: number
//    getUsers: (currentPage: number, pageSize: number) => void
//    setCurrentPage: (number: number) => void

// }

class UsersAJAXContainer extends React.Component<PropsUsersType> {

   componentDidMount() {
      const { currentPage, pageSize } = this.props
      this.props.getUsers(currentPage, pageSize)

   }
   setCurrentPage = (pageNumber: number) => {
      const { pageSize } = this.props
      this.props.getUsers(pageNumber, pageSize)
   }
   render() {
      return <Users

         usersList={this.props.usersList}
         pageSize={this.props.pageSize}
         usersCount={this.props.usersCount}
         currentPage={this.props.currentPage}
         isFetching={this.props.isFetching}
         followingInProgress={this.props.followingInProgress}
         displayedPagePortion={this.props.displayedPagePortion}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
         getUsers={this.props.getUsers}
         toggleIsFollowing={this.props.toggleIsFollowing}
         setCurrentPage={this.setCurrentPage}
         followToggle={this.props.followToggle}
      />
   }
}

const mapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {
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

const mapDispatchToProps: UsersMapDispatchToPropsType = {
   follow: actionCreatorFollowt,
   unfollow: actionCreatorUnfollow,
   setCurrentPage: actionCreatorCurrentPage,
   toggleIsFollowing: actionCreatorToggleIsFollowing,
   getUsers: getUsersThunkCreator,
   followToggle: followToggleThunkCreator
}

const UsersContainer = connect<UsersMapStateToPropsType, UsersMapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersAJAXContainer)

export default UsersContainer







