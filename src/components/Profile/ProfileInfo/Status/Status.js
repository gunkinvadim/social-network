import React from 'react'
import s from './Status.module.css'
import StatusForm from './StatusForm'

const Status = ({
    isMyProfile, status, isStatusLoading,
    editMode, toggleEditMode, onSubmitForm
}) => {

    if (!isMyProfile) {
        return (
            <div className={s.statusContainer}>
                <span>{isStatusLoading ? 'loading...' : status}</span>
            </div>
        )
    }

    return (
        <div className={s.statusContainer}>
            {!editMode
                ?   <span
                        onClick={() => toggleEditMode(true)}
                    >
                        {isStatusLoading ? 'loading...'
                            : status ? status : 'no status'}
                    </span>
                :   
                    <StatusForm
                        onSubmit={onSubmitForm}
                        initialValues={{ status }}
                    />
            } 
        </div>
    )
}

export default Status