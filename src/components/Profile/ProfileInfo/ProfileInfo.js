import React from 'react'
import './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import StatusContainerWithHooks from './Status/StatusContainerWithHooks'

const ProfileInfo = ({ profileData }) => {

    if (!profileData) {
        return (
            <Preloader />
        )
    }

    const { fullName, aboutMe } = profileData

    return (
        <div>
            <h1>{fullName}</h1>
            <p>{aboutMe}</p>
            <StatusContainerWithHooks />
        </div>
    )
}

export default ProfileInfo