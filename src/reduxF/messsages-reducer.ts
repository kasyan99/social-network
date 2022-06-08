const ADD_MESSAGE = 'social-network/messages/ADD-MESSAGE'

type ContactType = {
   id: number
   name: string
}

type MessageType = {
   id: number
   text: string
   my: boolean
}

type InitialStateType = {
   contactsList: Array<ContactType>
   messagesList: Array<MessageType>
}

const initialState: InitialStateType = {
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
   ]
}

function messagesReducer(state = initialState, action: any): InitialStateType {
   switch (action.type) {
      case ADD_MESSAGE:
         const message = {
            id: 6,
            text: action.newMessageText,
            my: true
         }
         return {
            ...state,
            messagesList: [...state.messagesList, message]
         }
      default:
         return state
   }
}

type ActionCreatorAddMessageType = {
   type: typeof ADD_MESSAGE
   newMessageText: string
}

export const actionCreatorAddMessage = (newMessageText: string): ActionCreatorAddMessageType => ({ type: ADD_MESSAGE, newMessageText })

export default messagesReducer