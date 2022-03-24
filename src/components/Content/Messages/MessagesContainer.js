import StoreContext from "../../../StoreContext";
import Messages from "./Messages";

function MessagesContainer() {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const massages = store.getState().massages

               return <Messages
                  contactsList={massages.contactsList}
                  messagesList={massages.messagesList}
                  newMessageText={massages.newMessageText}
                  dispatch={store.dispatch.bind(store)}
               />
            }
         }
      </StoreContext.Consumer>
   )
}

export default MessagesContainer