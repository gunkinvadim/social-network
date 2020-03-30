import React from 'react'
import s from './ErrorPopup.module.css'

const ErrorPopup = ({ closeErrorPopup }) => {
    return (
        <div 
            className={s.errorPopupWrapper}
            onClick={(e) => {
                e.target.className === s.errorPopupWrapper && closeErrorPopup()
            }}
        >
            <div className={s.errorPopup}>
                <button 
                    className={s.closeBtn}
                    onClick={closeErrorPopup}
                >&times;</button>
                <p>An error has occurred! Please try again.</p>
            </div>
        </div>
    )
}

export default ErrorPopup