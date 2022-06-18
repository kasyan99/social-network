import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, InjectedFormProps } from "redux-form";
import { reduxForm } from "redux-form";
import { loginThunkCreator } from "../../reduxF/auth-reducer";
import { AppStateType } from "../../reduxF/redux-store";
import { requiredField } from "../../utils/validators/validators";
import { Element } from "../common/FormsControls/FormsControls";
import style from '../common/FormsControls/FormsControls.module.css'
const Input = Element('input')

const LoginForm: React.FC<InjectedFormProps> = ({ handleSubmit, error }) => {
   return (
      <form onSubmit={handleSubmit}>
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
         {error &&
            (<div className={style.error_common}>
               {error}
            </div>)}

         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({
   form: 'loginForm'
})(LoginForm)

type LoginFormValuesType = {
   login: string
   password: string
   rememberMe: boolean
}
const Login: React.FC<mapStateToPropsType & mapDispatchToPropsType> = (props) => {
   const onSubmit = (formData: LoginFormValuesType) => {
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

type mapStateToPropsType = {
   isAuth: boolean
}

type mapDispatchToPropsType = {
   login: (email: string, password: string, rememberMe: boolean) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
   login: loginThunkCreator
})(Login)