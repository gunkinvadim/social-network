import React from 'react'
import s from './Friends.module.css'

const Friends = ({ friends }) => {

    return (
        <div>
            <h3 className={s.title}>Friends</h3>
            <ul>
                {friends.map(({ id, name }) => <li key={id}>
                    <a className={s.item}>{name}</a>
                </li>)}
            </ul>
        </div>
    )
}

export default Friends