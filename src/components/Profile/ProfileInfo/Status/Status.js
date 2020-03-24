import React from 'react'
import { emptyStatus } from './Status.module.css'

const Status = ({
    isMyProfile, status, isStatusLoading,
    editMode, statusText,
    toggleEditMode, changeStatusText, onUpdateStatus
}) => {



    if (!isMyProfile) {
        return (
            <div>{isStatusLoading ? 'loading...' : status}</div>
        )
    }

    return (
        <div>
            {!editMode
                ?   <span
                        onClick={() => toggleEditMode(true)}
                        className={statusText ? null : emptyStatus}
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