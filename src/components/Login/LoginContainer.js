import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { sendLoginData } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'
import { getIsAuth, getCaptcha } from '../../redux/selectors'

class LoginContainer extends React.Component {

    onFormSubmit = (formData) => {
        const { sendLoginData } = this.props
        sendLoginData(formData)
    }

    render() {
        const { isAuth, captcha } = this.props

        return isAuth ? <Redirect to='/profile'/>
            :   <Login
                    onFormSubmit={this.onFormSubmit}
                    captcha={captcha}
                />
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captcha: getCaptcha(state)
})

const mapDispatchToProps = {
    sendLoginData
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)