import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from "redux-form";
import styles from './DialogForm.module.css';



const DialogForm = (props) => {

   return (
      <form className={styles.dialog__form} onSubmit={props.handleSubmit}>
         <Field component={"textarea"} name={"newMessageText"} />
         <button className='btn'>Send message</button>
      </form>
   )
}

export default reduxForm({
   form: 'messageForm'
})(DialogForm)