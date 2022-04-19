import React from 'react';
import Contacts from './Contacts/Contacts';
import styles from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import { Navigate } from 'react-router-dom';

function Messages(props) {
   console.log(props.isAuth);

   if (!props.isAuth) {
      return <Navigate to='/login' />
   }
   return (
      <div className={styles.messages}>
         <Contacts contactsList={props.contactsList} />
         <Dialog
            dispatch={props.dispatch}
            messagesList={props.messagesList}
            newMessageText={props.newMessageText}
         />
      </div>
   )
}

export default Messages;