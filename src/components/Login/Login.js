import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Element } from "../common/FormsControls/FormsControls";

const Input = Element('input')

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"login"} component={Input} name={"login"}
               validate={[requiredField]} />
         </div>
         <div>
            <Field placeholder={"password"} component={Input} name={"password"}
               validate={[requiredField]} />
         </div>
         <div>
            <Field component={"input"} type={"checkbox"} name={"rememberMe"} /> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({
   form: 'loginForm'
})(LoginForm)


const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData);
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}

export default Login