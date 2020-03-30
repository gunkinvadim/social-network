import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Messages.module.css'

const DialogItem = ({ id, name }) => {
    return (
        <li className={s.dialog}>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </li>
    )
}

export default DialogItem