import React from 'react';
import Contacts from './Contacts/Contacts';
import styles from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import { ContactType, MessageType } from '../../../reduxF/messsages-reducer';

type Props = {
   isAuth: true
   contactsList: Array<ContactType>
   messagesList: Array<MessageType>
   addMessage: (text: string) => void
}

const Messages: React.FC<Props> = (props) => {

   // if (!props.isAuth) {
   //    return <Navigate to='/login' />
   // }
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