import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfilThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator, setAvatarThunkCreator, updateProfileData } from "../../../reduxF/profile-reducer";
import { Navigate, useParams } from 'react-router-dom';
import { compose } from "redux";

type Props = {
   getUserProfilThunkCreator: (userId: number) => void
   getUserStatusThunkCreator: (userId: number) => void
   userId: number
}

class ProfileContainer extends React.Component<Props> {

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


   let owner: boolean

   let { userId } = useParams();
   if (!userId) {
      userId = props.authedUser
      if (!userId) {
         return <Navigate to='/login' />
      }
   }

   if (props.profile) {
      owner = props.authedUser === props.profile.id
   }

   return <ProfileContainer userId={userId} owner={owner} {...props} />
}

const ProfileContainerConnected = compose<React.ComponentType>(
   connect(mapStateToProps, { getUserProfilThunkCreator, getUserStatusThunkCreator, updateUserStatus: updateUserStatusThunkCreator, setAvatar: setAvatarThunkCreator, updateProfileData })
)(ProfileById)


export default ProfileContainerConnected