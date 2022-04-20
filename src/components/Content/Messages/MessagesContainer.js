import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import Messages from "./Messages";


const mapStateToProps = (state) => {
   const messages = state.messages

   return {
      contactsList: messages.contactsList,
      messagesList: messages.messagesList,
      newMessageText: messages.newMessageText,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      dispatch: (action) => {
         dispatch(action)
      }
   }
}

const MessagesContainer = compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Messages)

export default MessagesContainer