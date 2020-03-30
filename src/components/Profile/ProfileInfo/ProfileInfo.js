import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import StatusContainer from './Status/StatusContainer'
import ProfilePhotoContainer from './ProfilePhoto/ProfilePhotoContainer'
import ProfileHeaderContainer from './ProfileHeader/ProfileHeaderContainer'
import ProfileDataContainer from './ProfileData/ProfileDataContainer'
import EditProfileInfoContainer from './EditProfileInfo/EditProfileInfoContainer'

const ProfileInfo = ({ editMode, profileData }) => {

    if (!profileData) {
        return (
            <Preloader />
        )
    }

    return (
        <div className={s.profileInfo}>
            {!editMode && <ProfileHeaderContainer />}
            {!editMode && <StatusContainer />}
            <ProfilePhotoContainer />
            <hr className={s.line}/>
            {editMode
                ? <EditProfileInfoContainer />
                : <ProfileDataContainer />}
        </div>
    )
}

export default ProfileInfo