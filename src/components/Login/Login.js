import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { loginThunkCreator } from "../../reduxF/auth-reducer";
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
   console.log('login props', props);
   const onSubmit = (formData) => {
      console.log(formData);
      props.login(formData.login, formData.password, false);
   }

   if (props.isAuth) {
      return <Navigate to='/profile' />
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
   login: loginThunkCreator
})(Login)