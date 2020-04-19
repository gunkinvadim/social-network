import React from 'react'
import ProfileHeader from './ProfileHeader'
import { getProfileData, getProfileIsEditMode,
    getIsMyProfile } from '../../../../redux/selectors'
import { toggleEditMode } from '../../../../redux/profile-reducer'
import { connect } from 'react-redux'

const ProfileHeaderContainer = ({fullName, isMyProfile, toggleEditMode }) => {
    const onEditProfileButtonClick = () => {
        toggleEditMode(true)
    }

    return <ProfileHeader
        fullName={fullName}
        isMyProfile={isMyProfile}
        onEditProfileButtonClick={onEditProfileButtonClick}
    />
}

const mapStateToProps = (state) => ({
    fullName: getProfileData(state).fullName,
    editMode: getProfileIsEditMode(state),
    isMyProfile: getIsMyProfile(state),
})

const mapDispatchToProps = {
    toggleEditMode
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeaderContainer)