import React from 'react'
import s from './ProfilePhoto.module.css'
import Preloader from '../../../common/Preloader/Preloader'
import defaultAvatar from './../../../../assets/images/default_avatar.png'

const ProfilePhoto = ({ editMode, onProfileImgChange, isPhotoUpdating, profilePhoto }) => {
    return (
        <div className={s.photoBlock}>
            <div className={s.profileImgContainer}>
                {isPhotoUpdating ? <Preloader /> : <img
                    className={s.profileImg}
                    src={profilePhoto || defaultAvatar}
                />}
            </div>
            {editMode && <div className={s.profileImgInput}>
                <h3>New avatar:</h3>
                <input
                    type='file'
                    name='myProfileImg'
                    onChange={onProfileImgChange}
                />
            </div>}
        </div>
    )
}

export default ProfilePhoto