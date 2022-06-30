import { connect } from "react-redux";
import { usersActions, getUsersThunkCreator, followToggleThunkCreator } from "../../../reduxF/users-reducer";
import Users from "./Users";
import React from "react"
import { getCurrentPage, getDisplayedPagePortion, getFilterByName, getFollowingInProgress, getIsFetching, getPageSize, getUsersCount, getUsersList } from "../../../reduxF/users-selectors";
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
   filterByname: string
}

type UsersMapDispatchToPropsType = {
   follow: (id: number) => void
   unfollow: (id: number) => void
   setCurrentPage: (number: number, filterByname: string) => void
   toggleIsFollowing: (isFetching: boolean, userId: number) => void
   getUsers: (currentPage: number, pageSize: number, filterByName?: string) => void
   followToggle: (user: ProfileType) => void
   setFilterByName: (filterByName: string) => void
}

export type PropsUsersType = UsersMapStateToPropsType & UsersMapDispatchToPropsType


class UsersAJAXContainer extends React.Component<PropsUsersType> {

   componentDidMount() {
      const { currentPage, pageSize } = this.props
      this.props.getUsers(currentPage, pageSize)

   }
   setCurrentPage = (pageNumber: number, filterByname: string) => {
      const { pageSize } = this.props
      this.props.getUsers(pageNumber, pageSize, filterByname)
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

         filterByname={this.props.filterByname}
         setFilterByName={this.props.setFilterByName}
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
      displayedPagePortion: getDisplayedPagePortion(state),
      filterByname: getFilterByName(state)
   }
}

const mapDispatchToProps: UsersMapDispatchToPropsType = {
   follow: usersActions.Followt,
   unfollow: usersActions.Unfollow,
   setCurrentPage: usersActions.CurrentPage,
   toggleIsFollowing: usersActions.ToggleIsFollowing,
   getUsers: getUsersThunkCreator,
   followToggle: followToggleThunkCreator,
   setFilterByName: usersActions.setFilterByName
}

const UsersContainer = connect<UsersMapStateToPropsType, UsersMapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersAJAXContainer)

export default UsersContainer







