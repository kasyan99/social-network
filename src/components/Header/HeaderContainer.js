import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { actionCreatorSetAuthUserData } from "../../reduxF/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
   componentDidMount() {
      axios
         .get(`http://localhost:3000/auth`)
         .then(response => {
            if (response.data.isAuth) {
               const { id, login, email } = response.data.me
               this.props.setAuthUserData(id, login, email)
            }
         })
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

export default connect(mapStateToProps, { setAuthUserData: actionCreatorSetAuthUserData })(HeaderContainer)