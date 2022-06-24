import React from 'react';
import { MessageType } from '../../../../reduxF/messsages-reducer';
import styles from './Dialog.module.css';
import DialogForm from './DialogForm/DialogForm'
import MessageList from './MessageList/MessageList';

type Props = {
   addMessage: (text: string) => void
   messagesList: Array<MessageType>
}

type LoginFormValuesType = {
   newMessageText: string
}

const Dialog: React.FC<Props> = (props) => {
   const onSubmit = (formData: LoginFormValuesType) => {
      props.addMessage(formData.newMessageText)
      formData.newMessageText = ''
   }

   return (
      <div className={styles.dialog}>
         <MessageList messagesList={props.messagesList} />
         <DialogForm onSubmit={onSubmit} />
      </div>
   )
}

export default Dialog;