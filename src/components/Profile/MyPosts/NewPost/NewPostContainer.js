import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { addPost } from '../../../../redux/profile-reducer'
import NewPost from './NewPost'


const NewPostContainer = ({ addPost, reset }) => {

    const onFormSubmit = ({ text }) => {
        addPost(text)
        reset('newPost')
    }

    const NewPostReduxForm = reduxForm({
        form: 'newPost'
    })(NewPost)

    return <NewPostReduxForm onSubmit={onFormSubmit} />
}




const mapDispatchToProps = { addPost, reset }

export default connect(null, mapDispatchToProps)(NewPostContainer)