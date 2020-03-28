import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import { getProfileEditMode, getProfileData,
    getIsPhotoUpdating } from '../../../../redux/selectors'
import { updateProfilePhoto } from '../../../../redux/profile-reducer'
import { connect } from 'react-redux'

const ProfilePhotoContainer = ({ editMode, updateProfilePhoto, isPhotoUpdating, photos }) => {
    const onProfileImgChange = (e) => {
        if (e.target.files.length) {
            updateProfilePhoto(e.target.files[0])
        }   
    }
    
    return <ProfilePhoto
        profilePhoto={photos.large}
        editMode={editMode}
        onProfileImgChange={onProfileImgChange}
        isPhotoUpdating={isPhotoUpdating}
    />
}

const mapStateToProps = (state) => ({
    editMode: getProfileEditMode(state),
    isPhotoUpdating: getIsPhotoUpdating(state),
    photos: getProfileData(state).photos
})

const mapDispatchToProps = {
    updateProfilePhoto
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotoContainer)