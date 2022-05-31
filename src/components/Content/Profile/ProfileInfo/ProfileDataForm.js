import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Element } from "../../../common/FormsControls/FormsControls";
import classes from './ProfileInfo.module.css';



const Input = Element('input')

const ProfileDataForm = ({ handleSubmit }) => {
   return (<form onSubmit={handleSubmit}>
      <button className={classes.save}>Svae</button>
      <div>
         <Field placeholder={"Name"} component={Input} name={"fullName"} />
      </div>
      <div>
         <Field placeholder={"Age"} component={Input} name={"age"} />
      </div>
   </form>)
}

const ProfileDataReduxForm = reduxForm({
   form: 'edit-profile'
})(ProfileDataForm)


export default ProfileDataReduxForm