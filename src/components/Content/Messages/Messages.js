import React from 'react';
import Contacts from './Contacts/Contacts';
import styles from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import { Navigate } from 'react-router-dom';

function Messages(props) {

   if (!props.isAuth) {
      return <Navigate to='/login' />
   }
   return (
      <div className={styles.messages}>
         <Contacts contactsList={props.contactsList} />
         <Dialog
            addMessage={props.addMessage}
            messagesList={props.messagesList}
         />
      </div>
   )
}

export default Messages;