import React from 'react'
import { post, postImg, postText, likeBtn, likedBtn } from './Post.module.css'

const Post = ({ postData: { id, text, likes, liked }, onLikePost }) => {
    return (
        <div className={post} >
            <img className={postImg}
                src='https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg'
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