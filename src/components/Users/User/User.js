import React from 'react'
import { NavLink } from 'react-router-dom'
import { userItem, userImg, unfollowBtn, followBtn, loadingBtn, userText,
    col1, userName, userStatus,
    col2, userLocation } from './User.module.css'
import defaultAvatar from '../../../assets/images/default_avatar.png'


const User = ({ userData: {name, id, photos, status, followed, isFollowDisabled }, onFollow, onUnfollow }) => {

    let btn
    if (isFollowDisabled) {
        btn = (
            <button
                className={loadingBtn}
                disabled
            >
                Loading...
            </button>
        )
    } else if (followed) {
        btn = (
            <button
                className={unfollowBtn}
                onClick={() => onFollow(false)}
            >
                Unfollow
            </button>
        )
    } else {
        btn = (
            <button
                className={followBtn}
                onClick={() => onFollow(true)}
            >
                Follow
            </button>
        )
    }

    return (
        <li className={userItem}>
            <div className={userImg}>
                <NavLink to={`/profile/${id}`} >
                    <img
                        src={photos.small !== null ? photos.small : defaultAvatar}
                        alt={name}
                    />
                </NavLink>
                {btn}
            </div>
            <div className={userText}>
                <div className={col1}>
                    <NavLink
                        className={userName}
                        to={`/profile/${id}`}
                    >{name}</NavLink>
                    <div className={userStatus}>{status}</div>
                </div>
                <div className={col2}>
                    <div className={userLocation}></div>
                </div>
            </div>
        </li>
    )
}

export default User