import React from 'react'
import LoginForm from './LoginForm'

const Login = ({ onFormSubmit, hasErrors, messages, captcha }) => {

    return (
        <div>
            <h1>Login</h1>
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