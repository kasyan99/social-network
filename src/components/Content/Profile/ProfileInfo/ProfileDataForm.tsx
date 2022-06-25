import React from "react";
import { DecoratedComponentClass, DecoratedFormProps, Field, InjectedFormProps } from "redux-form";
import { reduxForm } from "redux-form";
import { ProfileType } from "../../../../types/types";
import { maxLengthCreator } from "../../../../utils/validators/validators";
import { Element } from "../../../common/FormsControls/FormsControls";
import classes from './ProfileInfo.module.css';


const maxNameLength = maxLengthCreator(20)

const Input = Element('input')

type Props = {
   profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps & Props> = ({ handleSubmit, profile, error }) => {

   const ContactFields = () => {
      const names = Object.getOwnPropertyNames(profile.contacts)
      let key = 1
      const contacts = names.map(name => <Field key={key++} placeholder={name} component={Input} name={"contacts." + name}></Field>)
      return contacts
   }
   return (<form onSubmit={handleSubmit}>
      <button className={classes.save}>Svae</button>
      <div>
         <Field placeholder={"Name"} component={Input} name={"fullName"} validate={[maxNameLength]} />
      </div>
      <div>
         <Field placeholder={"Age"} component={Input} name={"age"} />
      </div>
      <div>
         <Field placeholder={"Country"} component={Input} name={"location.country"} />
      </div>
      <div>
         <Field placeholder={"City"} component={Input} name={"location.city"} />
      </div>
      <div>
         <div>Contacts</div>
         {ContactFields()}
      </div>
   </form>)
}

const ProfileDataReduxForm: DecoratedComponentClass<{}, DecoratedFormProps<{}, {}, string> | Props> = reduxForm({
   form: 'edit-profile'
})(ProfileDataForm)


export default ProfileDataReduxForm