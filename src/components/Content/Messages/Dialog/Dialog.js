import React from 'react';
import styles from './Dialog.module.css';
import DialogForm from './DialogForm/DialogForm'
import MessageList from './MessageList/MessageList';

function Dialog(props) {
   return (
      <div className={styles.dialog}>
         <MessageList messagesList={props.massages.messagesList} />
         <DialogForm dispatch={props.dispatch} newMessageText={props.massages.newMessageText} />
      </div>
   )
}

export default Dialog;