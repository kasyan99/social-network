import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import Messages from "./Messages";


const mapStateToProps = (state) => {
   const messages = state.messages

   return {
      contactsList: messages.contactsList,
      messagesList: messages.messagesList,
      newMessageText: messages.newMessageText,
      // isAuth: state.auth.isAuth
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      dispatch: (action) => {
         dispatch(action)
      }
   }
}

const AuthRedirectComponent = withAuthRedirect(Messages)
// let AuthRedirectComponent = (props) => {
//    if (!props.isAuth) {
//       return <Navigate to='/login' />
//    }
//    return <Messages {...props} />
// }

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default MessagesContainer 