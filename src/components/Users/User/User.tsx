import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './User.module.css'
import defaultAvatar from '../../../assets/images/default_avatar.png'
import { UserDataType } from '../../../redux/users-reducer'

type PropsType = {
    userData: UserDataType
    onFollow: (willFollow: boolean) => void
    isAuth: boolean
}

const User: React.FC<PropsType> = ({
    userData: { name, id, photos, status, followed, isFollowDisabled },
    onFollow,
    isAuth
}) => {

    let btn
    if (isFollowDisabled) {
        btn = (
            <button
                className={s.loadingBtn}
                disabled
            >
                Loading...
            </button>
        )
    } else if (followed) {
        btn = (
            <button
                className={s.unfollowBtn}
                onClick={() => onFollow(false)}
            >
                Unfollow
            </button>
        )
    } else {
        btn = (
            <button
                className={s.followBtn}
                onClick={() => onFollow(true)}
            >
                Follow
            </button>
        )
    }

    return (
        <li className={s.userItem}>
            <div className={s.userImg}>
                <NavLink to={`/profile/${id}`} >
                    <img
                        src={photos.small !== null ? photos.small : defaultAvatar}
                        alt={name}
                    />
                </NavLink>
                {isAuth && btn}
            </div>
            <div className={s.userText}>
                <div className={s.col1}>
                    <NavLink
                        className={s.userName}
                        to={`/profile/${id}`}
                    >{name}</NavLink>
                    <div className={s.userStatus}>{status}</div>
                </div>
                <div className={s.col2}>
                    <div className={s.userLocation}></div>
                </div>
            </div>
        </li>
    )
}

export default User