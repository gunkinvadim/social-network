import React from 'react'
import { NavLink } from 'react-router-dom'
import { dialog } from './../Messages.module.css'

const DialogItem = ({ id, name }) => {
    return (
        <li className={dialog}>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </li>
    )
}

export default DialogItem