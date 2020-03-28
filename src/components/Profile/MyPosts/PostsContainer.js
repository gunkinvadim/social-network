import { connect } from 'react-redux'
import MyPosts from './Posts'
import { getPostsData, getProfileData } from '../../../redux/selectors'


const mapStateToProps = (state) => ({
    postsData: getPostsData(state),
    profileImg: getProfileData(state).photos.small
})

const MyPostsContainer = connect(mapStateToProps)(MyPosts)

export default MyPostsContainer