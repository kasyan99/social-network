import React from 'react';
import { actionCreaterAddMessage, actionCreaterUpdateMessageText } from '../../../../../reduxF/store';
import styles from './DialogForm.module.css';



function DialogForm(props) {
   function sendMessage() {
      props.dispatch(actionCreaterAddMessage())
   }

   function updateMessageText(e) {
      const newMessageText = e.target.value
      props.dispatch(actionCreaterUpdateMessageText(newMessageText))
   }

   return (
      <div className={styles.dialog__form}>
         <textarea onChange={updateMessageText} value={props.newMessageText}></textarea>
         <button onClick={sendMessage} className='btn'>Send message</button>
      </div>
   )
}

export default DialogForm;