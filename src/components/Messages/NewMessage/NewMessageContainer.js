import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { sendMessage } from '../../../redux/messages-reducer'
import NewMessage from './NewMessage'

const NewMessageContainer = ({ sendMessage }) => {

    const onFormSubmit = ({ text }) => {
        sendMessage(text)
    }

    const NewMessageReduxForm = reduxForm({
        form: 'newMessage'
    })(NewMessage)

    return <NewMessageReduxForm onSubmit={onFormSubmit}/>
}



const mapDispatchToProps = { sendMessage }

export default connect(null, mapDispatchToProps)(NewMessageContainer)