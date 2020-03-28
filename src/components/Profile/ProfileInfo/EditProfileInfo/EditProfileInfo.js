import React from 'react'
import s from './EditProfileInfo.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input, Textarea } from '../../../common/FormsControls/FormsControls'
import { required } from '../../../../utils/validators'

const EditProfileInfoForm = ({ onCancel, handleSubmit, error, profileData: { contacts } }) => {

    return (
        <form
            className={s.editProfileForm}
            onSubmit={handleSubmit}
        >
            <div className={s.buttonBlock}>
                <h2>Change profile info</h2>
            </div>
            <div>
                <h3>Full name: </h3>
                <Field
                    component={Input}
                    type='text'
                    name='fullName'
                    validate={[required]}
                />
            </div>
            <div>
                <h3>About me: </h3>
                <Field
                    component={Textarea}
                    name='aboutMe'
                    validate={[required]}
                />
            </div>

            <div>
                <h3>Professional skills: </h3>
                <Field
                    component={Textarea}
                    name='lookingForAJobDescription'
                    validate={[required]}
                />
            </div>
            <div className={s.checkBox}>
                <Field
                    component={Input}
                    type='checkbox'
                    id='lookingForAJob'
                    name='lookingForAJob'
                />
                <label htmlFor='lookingForAJob'> Looking for a job</label>
            </div>

            <div className={s.contactsBlock}>
                <h3>Contacts</h3>
                <ul>
                    {Object.keys(contacts).map(key => <Contact
                        key={key}
                        title={key}
                        value={contacts[key]}
                    />)}
                </ul>
            </div>

            {error && <div className={s.errorMessages}>
                {error.map((e, i) => <p key={i}>{e}</p>)}
            </div>}

            <div className={s.buttonBlock}>
                <button
                    onClick={onCancel}
                    className={s.cancelBtn}
                >Cancel</button>
                <button 
                    className={s.saveBtn}
                    type='submit'
                >Save</button>
            </div>
        </form>
    )
}

const Contact = ({ title }) => {
    return <li>
        <b>{title}: </b>
        <Field
            component={Input}
            type='text'
            placeholder={title}
            name={`contacts.${title}`}
        />
    </li>
}

export default reduxForm({
    form: 'editProfile'
})(EditProfileInfoForm)