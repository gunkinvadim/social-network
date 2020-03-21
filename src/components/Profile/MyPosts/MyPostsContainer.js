import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { getPostsData } from '../../../redux/selectors'


const mapStateToProps = (state) => ({
    postsData: getPostsData(state)
})

const MyPostsContainer = connect(mapStateToProps)(MyPosts)

export default MyPostsContainer