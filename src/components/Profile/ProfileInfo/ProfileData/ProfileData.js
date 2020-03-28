import React from 'react'
import s from './ProfileData.module.css'


const ProfileInfo = ({ profileData }) => {
    
    const { aboutMe, lookingForAJob, lookingForAJobDescription,
        contacts } = profileData

    return (
        <div className={s.profileData}>
            {aboutMe && <div className={s.infoBlock}>
                <b>Looking for a job: </b>
                <span>{aboutMe}</span>
            </div>}
            {aboutMe && lookingForAJobDescription && <div className={s.infoBlock}>
                <b>Professional skills: </b>
                <span>{lookingForAJobDescription}</span>
            </div>}
            <div className={s.infoBlock}>
                <b>Looking for a job: </b>
                <span>{lookingForAJob ? 'Yes' : 'No'}</span>
            </div>
            <div className={s.contactsBlock}>
                <ul>
                    {Object.keys(contacts).map(key => <Contact
                        key={key}
                        title={key}
                        value={contacts[key]}
                    />)}
                </ul>
            </div>
        </div>
    )
}


const Contact = ({ title, value }) => {

    let valueStarts = ''

    if (value) for (let i = 0; i <= 6; i++) {
        valueStarts += value.charAt(i)
    }

    const link = (valueStarts === 'http://' || valueStarts === 'https:/')
        ? value
        : 'http://' + value


    return value && <li>
            <b>{title}: </b>
            <a href={link} target="_blank">{value}</a>
        </li>
}

export default ProfileInfo