import React from 'react'
import { loginForm, checkBox, errorMessage } from './Login.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required, maxLength, minLength, validEmail } from '../../utils/validators'

const Login = ({ onFormSubmit, hasErrors, messages }) => {

    const LoginReduxForm = reduxForm({
        form: 'login'
    })(LoginForm)

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm 
                onSubmit={onFormSubmit}
                hasErrors={hasErrors}
                messages={messages}
            />
        </div>
    )
}

const minLength8 = minLength(8)
const maxLength16 = maxLength(16)

const LoginForm = ({ handleSubmit, error }) => {

    return (
        <form
            className={loginForm}
            onSubmit={handleSubmit}
        >
            <Field
                component={Input}
                name='email'
                type='text'
                placeholder='Email'
                validate={[required, validEmail]}
            />
            <Field
                component={Input}
                name='password'
                type='password'
                placeholder='Password'
                validate={[required, minLength8, maxLength16]}
            />
            <div className={checkBox}>
                <Field
                    component={Input}
                    name='rememberMe'
                    type='checkbox'
                    id='rememberMe'
                />
                <label htmlFor='rememberMe'>Remember me</label>
            </div>
            {error && error.map((m, i) => <p key={i} className={errorMessage}>{m}</p>)}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login