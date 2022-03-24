import StoreContext from "../../../StoreContext";
import Messages from "./Messages";

function MessagesContainer() {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               console.log(store.getState());
               const messages = store.getState().messages

               return <Messages
                  contactsList={messages.contactsList}
                  messagesList={messages.messagesList}
                  newMessageText={messages.newMessageText}
                  dispatch={store.dispatch.bind(store)}
               />
            }
         }
      </StoreContext.Consumer>
   )
}

export default MessagesContainer