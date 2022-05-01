import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { actionCreatorAddMessage } from "../../../reduxF/messsages-reducer";
import Messages from "./Messages";


const mapStateToProps = (state) => {
   const messages = state.messages

   return {
      contactsList: messages.contactsList,
      messagesList: messages.messagesList
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: (newMessageText) => {
         dispatch(actionCreatorAddMessage(newMessageText))
      }
   }
}

const MessagesContainer = compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Messages)

export default MessagesContainer