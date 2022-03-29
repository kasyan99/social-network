import { connect } from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
   return {
      usersList: state.users.usersList
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      dispatch: (action) => {
         dispatch(action)
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer