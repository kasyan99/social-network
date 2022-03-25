import { actionCreaterAddPost, actionCreaterUpdatePostText } from '../../../../reduxF/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
   return {
      posts: state.profile.posts,
      newPostText: state.profile.newPostText,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(actionCreaterAddPost())
      },
      updatePostText: (newPostText) => {
         const action = actionCreaterUpdatePostText(newPostText)
         dispatch(action)
      }
   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer