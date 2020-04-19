import React from 'react'
import ProfileInfo from './ProfileInfo'
import { connect } from 'react-redux'
import { getProfileData, getProfileIsEditMode } from '../../../redux/selectors'


const ProfileInfoContainer = ({ profileData, editMode }) => {

    return <ProfileInfo
        profileData={profileData}
        editMode={editMode}
    />
}

const mapStateToProps = (state) => ({
    profileData: getProfileData(state),
    editMode: getProfileIsEditMode(state)
})


export default connect(mapStateToProps)(ProfileInfoContainer)