import React from 'react'
import s from './Login.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required, maxLength, minLength, validEmail } from '../../utils/validators'


const minLength6 = minLength(6)
const maxLength16 = maxLength(16)

const LoginForm = ({ handleSubmit, error, captcha }) => {

    return (
        <form
            className={s.loginForm}
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
                validate={[required, minLength6, maxLength16]}
            />

            {captcha && <div className={s.captcha}>
                <img src={captcha} alt='captcha' />
                <Field
                    component={Input}
                    name='captcha'
                    type='text'
                    placeholder='Captcha'
                    validate={[required]}
                />
            </div>}

            <div className={s.checkBox}>
                <Field
                    component={Input}
                    name='rememberMe'
                    type='checkbox'
                    id='rememberMe'
                />
                <label htmlFor='rememberMe'>Remember me</label>
            </div>
            
            {error && error.map((m, i) => <p key={i} className={s.errorMessage}>{m}</p>)}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm)