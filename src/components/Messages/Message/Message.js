import React from 'react'
import s from './../Messages.module.css'

const Message = ({ text }) => {
    return (
        <li className={s.message}>
            {text}
        </li>
    )
}

export default Message