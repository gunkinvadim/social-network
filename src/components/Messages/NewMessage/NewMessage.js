import React from 'react'
import s from './NewMessage.module.css'
import { Field } from 'redux-form'
import { maxLength, required } from '../../../utils/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength50 = maxLength(50)

const NewMessage = ({ handleSubmit }) => {

    return (
        <form 
            onSubmit={handleSubmit}
            className={s.messageForm}
        >
            <Field
                component={Textarea}
                name='text'
                placeholder='Enter your message'
                validate={[maxLength50]}
                className={s.textarea}
            />
            <button
                className={s.button}
                type='submit'
            >Send message</button>
        </form>
    )
}

export default NewMessage