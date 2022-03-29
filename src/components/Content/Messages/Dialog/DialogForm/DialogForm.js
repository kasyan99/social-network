import React from 'react';
import { actionCreatorAddMessage, actionCreatorUpdateMessageText } from '../../../../../reduxF/messsages-reducer';
import styles from './DialogForm.module.css';



function DialogForm(props) {
   function sendMessage() {
      props.dispatch(actionCreatorAddMessage())
   }

   function updateMessageText(e) {
      const newMessageText = e.target.value
      props.dispatch(actionCreatorUpdateMessageText(newMessageText))
   }

   return (
      <div className={styles.dialog__form}>
         <textarea onChange={updateMessageText} value={props.newMessageText}></textarea>
         <button onClick={sendMessage} className='btn'>Send message</button>
      </div>
   )
}

export default DialogForm;