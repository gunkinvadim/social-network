import React from 'react'
import EditProfileInfo from './EditProfileInfo'
import { getProfileData, getAuthData } from '../../../../redux/selectors'
import { toggleEditMode, updateProfilePhoto,
    updateProfileData } from '../../../../redux/profile-reducer'
import { connect } from 'react-redux'


const EditProfileInfoContainer = ({ profileData, toggleEditMode, updateProfileData, authId }) => {


    const onFormSubmit = (formData) => {
        updateProfileData(formData, authId)
    }

    const onCancel = () => {
        toggleEditMode(false)
    }
    

    return (
        <EditProfileInfo
            profileData={profileData}
            initialValues={profileData}
            onSubmit={onFormSubmit}
            onCancel={onCancel}
        />
    )
}

const mapStateToProps = (state) => ({
    profileData: getProfileData(state),
    authId: getAuthData(state).id
})

const mapDispatchToProps = {
    toggleEditMode,
    updateProfilePhoto,
    updateProfileData,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileInfoContainer)