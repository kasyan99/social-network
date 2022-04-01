import { connect } from "react-redux";
import { actionCreatorCurrentPage, actionCreatorFollowt, actionCreatorSetUsers, actionCreatorUnfollow, actionCreatorSetTotalUsersCount } from "../../../reduxF/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
   return {
      usersList: state.users.usersList,
      pageSize: state.users.pageSize,
      usersCount: state.users.usersCount,
      currentPage: state.users.currentPage
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
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer