// import Messages from "./Messages";

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

// export default MessagesContainer