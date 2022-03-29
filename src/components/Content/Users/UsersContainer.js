import { connect } from "react-redux";
import { actionCreatorFollowt, actionCreatorSetUsers, actionCreatorUnfollow } from "../../../reduxF/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
   return {
      usersList: state.users.usersList
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
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer