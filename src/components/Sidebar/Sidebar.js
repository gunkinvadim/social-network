import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'
import FriendsContainer from './Friends/FriendsContainer'

const Sidebar = ({ isMyProfile }) => {
    return (
        <section className={s.sidebar}>
            <nav>
                <ul>
                    <li className={s.item}>
                        <NavLink to='/profile' activeClassName={isMyProfile && s.active}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>

            <FriendsContainer />
        </section>
    )
}

export default Sidebar