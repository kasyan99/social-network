import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfilThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from "../../../reduxF/profile-reducer";
import { Navigate, useParams } from 'react-router-dom';
import { compose } from "redux";


class ProfileContainer extends React.Component {

   componentDidMount() {
      this.props.getUserProfilThunkCreator(this.props.userId)
      this.props.getUserStatusThunkCreator(this.props.userId)
   }

   render() {
      return <Profile {...this.props} />
   }
}

const mapStateToProps = state => ({
   profile: state.profile.profile,
   status: state.profile.status,
   authedUser: state.auth.id
})

const ProfileById = (props) => {
   let { userId } = useParams();
   if (!userId) {
      userId = props.authedUser
      if (!userId) {
         return <Navigate to='/login' />
      }
   }
   return <ProfileContainer userId={userId} {...props} />
}

const ProfileContainerConnected = compose(
   connect(mapStateToProps, { getUserProfilThunkCreator, getUserStatusThunkCreator, updateUserStatus: updateUserStatusThunkCreator })
)(ProfileById)


export default ProfileContainerConnected