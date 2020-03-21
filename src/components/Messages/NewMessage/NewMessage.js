import React from 'react'
import { messageForm, textarea, button } from './NewMessage.module.css'
import { Field } from 'redux-form'
import { maxLength, required } from '../../../utils/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength50 = maxLength(50)

const NewMessage = ({ handleSubmit }) => {

    return (
        <form 
            onSubmit={handleSubmit}
            className={messageForm}
        >
            <Field
                component={Textarea}
                name='text'
                placeholder='Enter your message'
                validate={[maxLength50]}
                className={textarea}
            />
            <button
                className={button}
                type='submit'
            >Send message</button>
        </form>
    )
}

export default NewMessage