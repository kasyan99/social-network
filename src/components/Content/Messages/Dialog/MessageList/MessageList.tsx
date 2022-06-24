import React from 'react';
import { MessageType } from '../../../../../reduxF/messsages-reducer';
import styles from './MessageList.module.css';

type Props = {
   messagesList: Array<MessageType>
}
const MessageList: React.FC<Props> = (props) => {

   const messagesList = () => {
      return props.messagesList.map(
         message =>
            <div
               className={`${styles.dialog__message} ${message.my === true ? styles.dialog__message_my : styles.dialog__message_friend}`}
               key={message.id}
            >
               <p>{message.text}</p>
            </div>
      )
   }

   return (
      <div className={styles.dialog__list}>
         {messagesList()}
      </div>
   )
}

export default MessageList;