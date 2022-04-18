// import axios from "axios";
import React from "react";
import { connect } from "react-redux";
// import { authAPI } from "../../api/api";
import { getAuthUserDataThunkCreator } from "../../reduxF/auth-reducer";
// import { actionCreatorSetAuthUserData } from "../../reduxF/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
   componentDidMount() {
      // authAPI.me()
      //    .then(response => {
      //       if (response.data.isAuth) {
      //          const { id, login, email } = response.data.me
      //          this.props.setAuthUserData(id, login, email)
      //       }
      //    })
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

// export default connect(mapStateToProps, { setAuthUserData: actionCreatorSetAuthUserData })(HeaderContainer)
export default connect(mapStateToProps, { getAuthUserDataThunkCreator })(HeaderContainer)