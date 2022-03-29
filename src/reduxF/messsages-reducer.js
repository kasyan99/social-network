const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const initialState = {
   contactsList: [
      { id: 1, name: 'Nikolay' },
      { id: 2, name: 'Vlad' },
      { id: 3, name: 'Dima' },
      { id: 4, name: 'Yana' },
      { id: 5, name: 'Katia' },
   ],
   messagesList: [
      { id: 1, text: 'Hello', my: false },
      { id: 2, text: 'What areayou doing', my: true },
      { id: 3, text: 'Nothing', my: false },
      { id: 4, text: 'Ok', my: true },
      { id: 5, text: ')))))', my: false },
      { id: 6, text: 'Bye', my: true },
   ],
   newMessageText: ''
}

// function messagesReducer(state = initialState, action) {
//    const stateCopy = { ...state }
//    if (action.type === ADD_MESSAGE) {
//       const message = {
//          id: 6,
//          text: state.newMessageText,
//          my: true
//       }
//       stateCopy.messagesList = [...state.messagesList]
//       stateCopy.messagesList.push(message)
//       stateCopy.newMessageText = ''
//    } else if (action.type === UPDATE_MESSAGE_TEXT) {
//       stateCopy.newMessageText = action.newMessageText
//    }

//    return stateCopy
// }

function messagesReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_MESSAGE:
         const message = {
            id: 6,
            text: state.newMessageText,
            my: true
         }
         return {
            ...state,
            messagesList: [...state.messagesList, message],
            newMessageText: ''
         }
      case UPDATE_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newMessageText
         }
      default:
         return state
   }
}

export const actionCreatorAddMessage = () => ({ type: ADD_MESSAGE })
export const actionCreatorUpdateMessageText = (newMessageText) => ({ type: UPDATE_MESSAGE_TEXT, newMessageText })

export default messagesReducer