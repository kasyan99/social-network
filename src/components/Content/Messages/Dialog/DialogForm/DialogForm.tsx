import React from 'react';
import { Field, SubmitHandler } from 'redux-form';
import { reduxForm } from "redux-form";
import { maxLengthCreator } from '../../../../../utils/validators/validators';
import { Element } from '../../../../common/FormsControls/FormsControls';
import styles from './DialogForm.module.css';

const maxLength100 = maxLengthCreator(100)

const Textarea = Element('textarea')

type Props = {
   handleSubmit: SubmitHandler
}

const DialogForm: React.FC<Props> = (props) => {

   return (
      <form className={styles.dialog__form} onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            name={"newMessageText"}
            validate={[maxLength100]}
            placeholder={'Message text...'}
         />
         <button className='btn'>Send message</button>
      </form>
   )
}

export default reduxForm({
   form: 'messageForm'
})(DialogForm)