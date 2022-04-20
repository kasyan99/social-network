import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfilThunkCreator } from "../../../reduxF/profile-reducer";
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

   componentDidMount() {
      this.props.getUserProfilThunkCreator(this.props.userId)
   }

   render() {

      return <Profile {...this.props} />
   }
}

const mapStateToProps = state => ({
   profile: state.profile.profile
})

const ProfileContainerConnected = compose(
   connect(mapStateToProps, { getUserProfilThunkCreator }),
   withAuthRedirect
)(ProfileContainer)

const ProfileById = () => {
   let { userId } = useParams();
   if (!userId) {
      userId = 2
   }
   return <ProfileContainerConnected userId={userId} />
}

export default ProfileById