import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { addPost } from '../../../../redux/profile-reducer'
import NewPost from './NewPost'


const NewPostContainer = ({ addPost }) => {

    const onFormSubmit = ({ text }) => {
        addPost(text)
    }

    const NewPostReduxForm = reduxForm({
        form: 'newPost'
    })(NewPost)

    return <NewPostReduxForm onSubmit={onFormSubmit} />
}




const mapDispatchToProps = { addPost }

export default connect(null, mapDispatchToProps)(NewPostContainer)