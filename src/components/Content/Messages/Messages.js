import React from 'react';
import Contacts from './Contacts/Contacts';
import styles from './Messages.module.css';
import Dialog from './Dialog/Dialog'

function Messages(props) {
   return (
      <div className={styles.messages}>
         <Contacts contactsList={props.massages.contactsList} />
         <Dialog dispatch={props.dispatch} massages={props.massages} />
      </div>
   )
}

export default Messages;