const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

function messagesReducer(state, action) {
   if (action.type === ADD_MESSAGE) {
      const message = {
         id: 6,
         text: state.newMessageText,
         my: true
      }

      state.messagesList.push(message)
      state.newMessageText = ''
   } else if (action.type === UPDATE_MESSAGE_TEXT) {
      state.newMessageText = action.newMessageText
   }

   return state
}

export default messagesReducer