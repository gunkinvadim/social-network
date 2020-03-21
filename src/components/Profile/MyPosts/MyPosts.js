import React from 'react'
import { myPosts } from './MyPosts.module.css'
import NewPostContainer from './NewPost/NewPostContainer'
import PostContainer from './Post/PostContainer'

const MyPosts = ({ postsData }) => {

    return (
        <div className={myPosts}>
            <h3>My Posts</h3>
            <NewPostContainer />
            {postsData.map((postData) => <PostContainer
                key={postData.id}
                postData={postData}/>)}
        </div>
    )
}

export default MyPosts