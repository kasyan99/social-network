import React from "react";
import { connect } from "react-redux";
import { logoutThunkCreator } from "../../reduxF/auth-reducer";
import { AppStateType } from "../../reduxF/redux-store";
import Header from "./Header";

export type Props = {
   isAuth: boolean
   login: string
   logout: () => void
}

const HeaderContainer = (props) => {
   return <Header {...props} />
}

const mapStateToProps = (state: AppStateType) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export default connect(mapStateToProps, { logout: logoutThunkCreator })(HeaderContainer)