import React from 'react'
import s from './Posts.module.css'
import NewPostContainer from './NewPost/NewPostContainer'
import PostContainer from './Post/PostContainer'

const MyPosts = ({ postsData, profileImg }) => {

    return (
        <div className={s.posts}>
            <h3>My Posts</h3>
            <NewPostContainer />
            {postsData.map((postData) => <PostContainer
                key={postData.id}
                postData={postData}
                profileImg={profileImg}/>)}
        </div>
    )
}

export default MyPosts