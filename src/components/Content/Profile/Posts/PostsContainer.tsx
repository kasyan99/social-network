import { profileActions } from '../../../../reduxF/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux'
import { AppStateType } from '../../../../reduxF/redux-store';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppStateType) => {
   return {
      posts: state.profile.posts,
      newPostText: state.profile.newPostText,
   }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      addPost: (newPostText: string) => {
         dispatch(profileActions.addPost(newPostText))
      }
   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer