import React from 'react'
import LoginForm from './LoginForm'

const Login = ({ onFormSubmit, hasErrors, messages, captcha }) => {

    return (
        <div>
            <h3>Login</h3>
            <LoginForm
                onSubmit={onFormSubmit}
                hasErrors={hasErrors}
                messages={messages}
                captcha={captcha}
            />
        </div>
    )
}

export default Login