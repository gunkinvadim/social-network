import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { sendMessage } from '../../../redux/messages-reducer'
import NewMessage from './NewMessage'

const NewMessageContainer = ({ sendMessage, reset }) => {

    const onFormSubmit = ({ text }) => {
        sendMessage(text)
        reset('newMessage')
    }

    const NewMessageReduxForm = reduxForm({
        form: 'newMessage'
    })(NewMessage)

    return <NewMessageReduxForm
        onSubmit={onFormSubmit}/>
}



const mapDispatchToProps = { sendMessage, reset }

export default connect(null, mapDispatchToProps)(NewMessageContainer)