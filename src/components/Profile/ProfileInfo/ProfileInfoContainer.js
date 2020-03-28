import React from 'react'
import ProfileInfo from './ProfileInfo'
import { connect } from 'react-redux'
import { getProfileData, getProfileEditMode } from '../../../redux/selectors'


const ProfileInfoContainer = ({ profileData, editMode }) => {

    return <ProfileInfo
        profileData={profileData}
        editMode={editMode}
    />
}

const mapStateToProps = (state) => ({
    profileData: getProfileData(state),
    editMode: getProfileEditMode(state)
})


export default connect(mapStateToProps)(ProfileInfoContainer)