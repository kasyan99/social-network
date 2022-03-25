import { connect } from "react-redux";
import Messages from "./Messages";

// function MessagesContainer() {
//    return (
//       <StoreContext.Consumer>
//          {
//             (store) => {
//                const messages = store.getState().messages

//                return <Messages
//                   contactsList={messages.contactsList}
//                   messagesList={messages.messagesList}
//                   newMessageText={messages.newMessageText}
//                   dispatch={store.dispatch.bind(store)}
//                />
//             }
//          }
//       </StoreContext.Consumer>
//    )
// }

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