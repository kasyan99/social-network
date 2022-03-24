import React from 'react';
import styles from './Dialog.module.css';
import DialogForm from './DialogForm/DialogForm'
import MessageList from './MessageList/MessageList';

function Dialog(props) {
   return (
      <div className={styles.dialog}>
         <MessageList messagesList={props.messagesList} />
         <DialogForm dispatch={props.dispatch} newMessageText={props.newMessageText} />
      </div>
   )
}

export default Dialog;