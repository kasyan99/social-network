import React from "react";
import Profile from "./Profile";
import axios from "axios"
import { connect } from "react-redux";
import { setUserProfile } from "../../../reduxF/profile-reducer";
import { useParams } from 'react-router-dom';



const ProfileById = () => {
   let { userId } = useParams();
   return <ProfileContainerConnected userId={userId} />
}

class ProfileContainer extends React.Component {

   componentDidMount() {
      axios
         .get(`http://localhost:3000/users?id=${this.props.userId}`)
         .then(response => {
            this.props.setUserProfile(response.data[0])
         })
   }

   render() {
      return <Profile {...this.props} />
   }
}

const mapStateToProps = state => ({
   profile: state.profile.profile
})

const ProfileContainerConnected = connect(mapStateToProps, { setUserProfile })(ProfileContainer)
export default ProfileById