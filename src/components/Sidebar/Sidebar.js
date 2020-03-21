import React from 'react'
import { NavLink } from 'react-router-dom'
import { sidebar, item, active } from './Sidebar.module.css'
import FriendsContainer from './Friends/FriendsContainer'

const Sidebar = () => {
    return (
        <section className={sidebar}>
            <nav>
                <ul>
                    <li className={item}>
                        <NavLink to='/profile' activeClassName={active}>Profile</NavLink>
                    </li>
                    <li className={item}>
                        <NavLink to='/messages' activeClassName={active}>Messages</NavLink>
                    </li>
                    <li className={item}>
                        <NavLink to='/news' activeClassName={active}>News</NavLink>
                    </li>
                    <li className={item}>
                        <NavLink to='/music' activeClassName={active}>Music</NavLink>
                    </li>
                    <li className={item}>
                        <NavLink to='/users' activeClassName={active}>Users</NavLink>
                    </li>
                    <li className={item}>
                        <NavLink to='/settings' activeClassName={active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>

            <FriendsContainer />
        </section>
    )
}

export default Sidebar