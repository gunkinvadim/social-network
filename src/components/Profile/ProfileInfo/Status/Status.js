import React from 'react'
import s from './Status.module.css'

const Status = ({
    isMyProfile, status, isStatusLoading,
    editMode, statusText,
    toggleEditMode, changeStatusText, onUpdateStatus
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
                            : statusText ? statusText : 'no status'}
                    </span>
                :   
                    <form
                        onSubmit={onUpdateStatus}
                    >
                        <input
                            value={statusText}
                            onChange={(e) => changeStatusText(e.currentTarget.value)}
                            autoFocus
                        />
                        <button
                            type='submit'
                        >Save</button>
                    </form>
            } 
        </div>
    )
}

export default Status