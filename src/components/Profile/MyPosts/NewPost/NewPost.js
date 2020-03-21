import React from 'react'
import { postForm, textarea, button } from './NewPost.module.css'
import { Field } from 'redux-form'
import { required, maxLength } from '../../../../utils/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls'


const maxLength30 = maxLength(30)

const NewPost = ({ handleSubmit }) => {

    return (
        <form 
            onSubmit={handleSubmit}
            className={postForm}
        >
            <Field
                component={Textarea}
                name='text'
                placeholder='Post message'
                validate={[maxLength30]}
                className={textarea}
            />
            <button
                className={button}
                type='submit'
            >Add post</button>
        </form>
    )
}

export default NewPost