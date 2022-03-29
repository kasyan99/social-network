import { connect } from "react-redux";
import Messages from "./Messages";


const mapStateToProps = (state) => {
   const messages = state.messages

   return {
      contactsList: messages.contactsList,
      messagesList: messages.messagesList,
      newMessageText: messages.newMessageText
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      dispatch: (action) => {
         dispatch(action)
      }
   }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer