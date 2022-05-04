// import axios from "axios";
import React from "react";
import { connect } from "react-redux";
// import { authAPI } from "../../api/api";
import { getAuthUserDataThunkCreator, logoutThunkCreator } from "../../reduxF/auth-reducer";
// import { actionCreatorSetAuthUserData } from "../../reduxF/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getAuthUserDataThunkCreator()
   }

   render() {
      return <Header {...this.props} />
   }
}

const mapStateToProps = state => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export default connect(mapStateToProps, { getAuthUserDataThunkCreator, logout: logoutThunkCreator })(HeaderContainer)