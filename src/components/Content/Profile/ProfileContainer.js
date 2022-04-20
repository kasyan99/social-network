import React from "react";
import Profile from "./Profile";
// import axios from "axios"
import { connect } from "react-redux";
import { getUserProfilThunkCreator } from "../../../reduxF/profile-reducer";
// import {  setUserProfile } from "../../../reduxF/profile-reducer";
import { Navigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
// import { usersAPI } from "../../../api/api";



const ProfileById = () => {
   let { userId } = useParams();
   if (!userId) {
      userId = 2
   }
   return <ProfileContainerConnected userId={userId} />
}

class ProfileContainer extends React.Component {

   componentDidMount() {
      // axios
      //    .get(`http://localhost:3000/users?id=${this.props.userId}`)
      //    .then(response => {
      //       this.props.setUserProfile(response.data[0])
      //    })

      // usersAPI.getProfileInfo(this.props.userId)
      //    .then(profileInfo => { this.props.setUserProfile(profileInfo) })

      this.props.getUserProfilThunkCreator(this.props.userId)
   }

   render() {

      return <Profile {...this.props} />
   }
}

// let AuthRedirectComponent = (props) => {
//    if (!props.isAuth) {
//       return <Navigate to='/login' />
//    }
//    return <ProfileContainer {...props} />
// }

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)


const mapStateToProps = state => ({
   profile: state.profile.profile
})

// const ProfileContainerConnected = connect(mapStateToProps, { setUserProfile })(ProfileContainer)
const ProfileContainerConnected = connect(mapStateToProps, { getUserProfilThunkCreator })(AuthRedirectComponent)
export default ProfileById