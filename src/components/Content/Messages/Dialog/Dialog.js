import React from 'react';
import styles from './Dialog.module.css';
import DialogForm from './DialogForm/DialogForm'
import MessageList from './MessageList/MessageList';

function Dialog(props) {
   const onSubmit = (formData) => {
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