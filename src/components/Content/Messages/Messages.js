import React from 'react';
import Contacts from './Contacts/Contacts';
import Dialog from './Dialog/Dialog';
import styles from './Messages.module.css';

function Messages(props) {
   return (
      <div className={styles.messages}>
         <Contacts contactsList={props.massages.contactsList} />
         <Dialog />
      </div>
   )
}

export default Messages;