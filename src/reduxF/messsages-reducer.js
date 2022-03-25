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

function messagesReducer(state = initialState, action) {
   if (action.type === ADD_MESSAGE) {
      const message = {
         id: 6,
         text: state.newMessageText,
         my: true
      }
      const newState = { ...state }
      newState.messagesList = [...state.messagesList]
      newState.messagesList.push(message)
      newState.newMessageText = ''
      return newState
   } else if (action.type === UPDATE_MESSAGE_TEXT) {
      const newState = { ...state }
      newState.newMessageText = action.newMessageText
      return newState
   }

   return state
}

export const actionCreaterAddMessage = () => ({ type: ADD_MESSAGE })
export const actionCreaterUpdateMessageText = (newMessageText) => ({ type: UPDATE_MESSAGE_TEXT, newMessageText })

export default messagesReducer