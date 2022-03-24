import Messages from "./Messages";

function MessagesContainer(props) {
   return (
      <Messages
         dispatch={props.dispatch}
         contactsList={props.massages.contactsList}
         messagesList={props.massages.messagesList}
         newMessageText={props.massages.newMessageText}
      />
   )
}

export default MessagesContainer