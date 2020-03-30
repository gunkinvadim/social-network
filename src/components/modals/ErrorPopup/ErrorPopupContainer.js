import React from 'react'
import ErrorPopup from './ErrorPopup'
import { connect } from 'react-redux'
import { toggleHasError } from '../../../redux/app-reducer'


const ErrorPopupContainer = ({ toggleHasError }) => {

    const closeErrorPopup = () => {
        toggleHasError(false)
    }

    return <ErrorPopup
        closeErrorPopup={closeErrorPopup}
    />
}

const mapDispatchToProps = {
    toggleHasError
}

export default connect(null, mapDispatchToProps)(ErrorPopupContainer)