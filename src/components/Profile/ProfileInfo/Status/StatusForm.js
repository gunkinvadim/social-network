import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../../common/FormsControls/FormsControls'
import s from './Status.module.css'

const StatusForm = ({ handleSubmit }) => {
    return (
        <form
            onSubmit={handleSubmit}
        >
            <Field
                component='input'
                name='status'
                autoFocus
            />
            <button
                type='submit'
            >Save</button>
        </form>
    )
}

export default reduxForm({
    form: 'status'
})(StatusForm)