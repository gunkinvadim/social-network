import React from 'react'
import s from './NewPost.module.css'
import { Field } from 'redux-form'
import { maxLength } from '../../../../utils/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls'


const maxLength30 = maxLength(30)

const NewPost = ({ handleSubmit }) => {

    return (
        <form 
            onSubmit={handleSubmit}
            className={s.postForm}
        >
            <Field
                component={Textarea}
                name='text'
                placeholder='Post message'
                validate={[maxLength30]}
                className={s.textarea}
            />
            <button
                className={s.button}
                type='submit'
            >Add post</button>
        </form>
    )
}

export default NewPost