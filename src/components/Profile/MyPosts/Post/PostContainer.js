import React from 'react'
import Post from './Post'
import { likePost } from '../../../../redux/profile-reducer'
import { connect } from 'react-redux'


const PostContainer = ({ postData, likePost, profileImg }) => {

    const onLikePost = () => {
        likePost(postData.id)
    }


    return <Post
        postData={postData}
        onLikePost={onLikePost}
        profileImg={profileImg}
    />
}


const mapDispatchToProps = {
    likePost
}

export default connect(null, mapDispatchToProps)(PostContainer)