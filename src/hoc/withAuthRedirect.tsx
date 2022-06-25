import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../reduxF/redux-store";

const mapStateToPropsRedirect = (state: AppStateType) => ({
   isAuth: state.auth.isAuth
})

type Props = {
   isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
   const RedirectComponent = (props: WCP & Props & typeof RedirectComponent) => {

      if (!props.isAuth) {
         return <Navigate to='/login' />
      }

      return <WrappedComponent {...props} />
   }
   const ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
   return ConnectedAuthRedirectComponent
}