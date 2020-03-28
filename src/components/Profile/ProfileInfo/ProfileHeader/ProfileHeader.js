import React from 'react'
import s from './ProfileHeader.module.css'

const ProfileHeader = ({ fullName, isMyProfile,
    onEditProfileButtonClick }) => {

    return (
            <div className={s.profileHeader}>
                <h2>{fullName}</h2>
                {isMyProfile && <button
                    className={s.editProfileBtn}
                    onClick={onEditProfileButtonClick}
                >Edit profile</button>}
            </div>
    )
}


export default ProfileHeader