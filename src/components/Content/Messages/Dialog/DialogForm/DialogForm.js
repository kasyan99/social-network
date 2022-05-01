import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../../../utils/validators/validators';
import { Element } from '../../../../common/FormsControls/FormsControls';
import styles from './DialogForm.module.css';

const maxLength100 = maxLengthCreator(100)

const Textarea = Element('textarea')

const DialogForm = (props) => {

   return (
      <form className={styles.dialog__form} onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            name={"newMessageText"}
            validate={[requiredField, maxLength100]}
            placeholder={'Message text...'}
         />
         <button className='btn'>Send message</button>
      </form>
   )
}

export default reduxForm({
   form: 'messageForm'
})(DialogForm)