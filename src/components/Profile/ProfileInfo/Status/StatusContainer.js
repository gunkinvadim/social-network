import React, { useState } from 'react'
import Status from './Status'
import { connect } from 'react-redux'
import { updateStatus } from '../../../../redux/profile-reducer'
import { getIsMyProfile, getProfileStatus,
    getIsStatusLoading } from '../../../../redux/selectors'

const StatusContainer = ({ updateStatus, status, isMyProfile, isStatusLoading }) => {

    const [ editMode, setEditMode ] = useState(false)

    const toggleEditMode = (isEditMode) => {
        setEditMode(isEditMode)
    }


    const onSubmitForm = (formData) => {
        updateStatus(formData.status)
        toggleEditMode(false)
    }


    return (
        <Status
            isMyProfile={isMyProfile}
            status={status}
            isStatusLoading={isStatusLoading}
            editMode={editMode}
            toggleEditMode={toggleEditMode}
            onSubmitForm={onSubmitForm}
        />
    )
}

const mapStateToProps = (state) => ({
    isMyProfile: getIsMyProfile(state),
    status: getProfileStatus(state),
    isStatusLoading: getIsStatusLoading(state)
})

const mapDispatchToProps = {
    updateStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer)