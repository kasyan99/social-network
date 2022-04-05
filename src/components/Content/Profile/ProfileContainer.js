import React from "react";
import Profile from "./Profile";
import axios from "axios"
import { connect } from "react-redux";
import { setUserProfile } from "../../../reduxF/profile-reducer";


class ProfileContainer extends React.Component {

   componentDidMount() {
      axios
         .get(`http://localhost:3000/users?id=1`)
         .then(response => {
            console.log('props', this.props);
            console.log('data', response.data[0]);
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)