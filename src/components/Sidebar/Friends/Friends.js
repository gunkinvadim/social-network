import React from 'react'
import { title, item } from './Friends.module.css'

const Friends = ({ friends }) => {

    return (
        <div>
            <h3 className={title}>Friends</h3>
            <ul>
                {friends.map(({ id, name }) => <li key={id}><a className={item}>{name}</a></li>)}
            </ul>
        </div>
    )
}

export default Friends