import React from 'react'
import { post, postImg, postText, likeBtn, likedBtn } from './Post.module.css'
import defaultAvatar from '../../../../assets/images/default_avatar.png'

const Post = ({ postData: { id, text, likes, liked }, onLikePost, profileImg }) => {
    return (
        <div className={post} >
            <img className={postImg}
                src={profileImg || defaultAvatar}
            />
            <div className={postText}>
                {text}
            </div>
            <button 
                className={likeBtn + ' ' + (liked && likedBtn)}
                onClick={onLikePost}
            >Like (<span>{likes}</span>)</button>
        </div>
    )
}

export default Post