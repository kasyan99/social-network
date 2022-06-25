import React from "react";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { messagesActions } from "../../../reduxF/messsages-reducer";
import { AppStateType } from "../../../reduxF/redux-store";
import Messages from "./Messages";



const mapStateToProps = (state: AppStateType) => {
   const messages = state.messages

   return {
      contactsList: messages.contactsList,
      messagesList: messages.messagesList
   }
}

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      addMessage: (newMessageText: string) => {
         dispatch(messagesActions.addMessage(newMessageText))
      }
   }
}

export type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

const MessagesContainer = compose<React.ComponentType>(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect,
)(Messages)

export default MessagesContainer