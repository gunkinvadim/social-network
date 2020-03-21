import React, { useState, useEffect } from 'react'
import Status from './Status'
import { connect } from 'react-redux'
import { updateStatus } from '../../../../redux/profile-reducer'
import { getIsMyProfile, getProfileStatus,
    getIsStatusLoading } from '../../../../redux/selectors'

const StatusContainerWithHooks = ({ updateStatus, status, isMyProfile, isStatusLoading }) => {

    const [ editMode, setEditMode ] = useState(false)
    const [ statusText, setStatusText ] = useState(status)

    useEffect(() => {
        setStatusText(status)
    }, [status])


    const toggleEditMode = (editMode) => {
        setEditMode(editMode)
    }

    const changeStatusText = (statusText) => {
        setStatusText(statusText)
    }

    const onUpdateStatus = () => {
        updateStatus(statusText)
        toggleEditMode(false)
    }


    return <Status
        isMyProfile={isMyProfile}
        status={status}
        isStatusLoading={isStatusLoading}
        editMode={editMode}
        statusText={statusText}
        toggleEditMode={toggleEditMode}
        changeStatusText={changeStatusText}
        onUpdateStatus={onUpdateStatus} />
    }

const mapStateToProps = (state) => ({
    isMyProfile: getIsMyProfile(state),
    status: getProfileStatus(state),
    isStatusLoading: getIsStatusLoading(state)
})

const mapDispatchToProps = {
    updateStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainerWithHooks)