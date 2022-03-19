import React from 'react';
import styles from './MessageList.module.css';

function MessageList(props) {

   const messagesList = () => {
      return props.messagesList.map(
         message => <div className={`${styles.dialog__message} ${message.my === true ? styles.dialog__message_my : styles.dialog__message_friend}`}><p>{message.text}</p></div>
      )
   }

   return (
      <div className={styles.dialog__list}>
         {messagesList()}
      </div>
   )
}

export default MessageList;