import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { sendLoginData } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'

class LoginContainer extends React.Component {

    onFormSubmit = (formData) => {
        const { sendLoginData } = this.props
        sendLoginData(formData)
    }

    render() {
        const { isAuth, hasErrors, messages } = this.props

        return isAuth ? <Redirect to='/profile'/>
            :   <Login
                    onFormSubmit={this.onFormSubmit}
                />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps = {
    sendLoginData
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)