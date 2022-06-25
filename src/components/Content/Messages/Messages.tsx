import React from 'react';
import Contacts from './Contacts/Contacts';
import styles from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import { MapDispatchToPropsType, MapStateToPropsType } from './MessagesContainer';

type Props = MapStateToPropsType & MapDispatchToPropsType

const Messages: React.FC<Props> = (props) => {

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