import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

const LoginForm = (props) => {
   console.log(props);
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"login"} component={"input"} name={"login"} />
         </div>
         <div>
            <Field placeholder={"password"} component={"input"} name={"password"} />
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