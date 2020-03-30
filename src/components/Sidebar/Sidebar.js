import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'
import cn from 'classnames'
import FriendsContainer from './Friends/FriendsContainer'

const Sidebar = ({ isMyProfile, isSidebarShown, closeSidebar }) => {
    return (
        <section
            className={cn(s.sidebar, isSidebarShown && s.active)}
            onClick={(e) => {
                e.target.className === cn(s.sidebar, s.active) && closeSidebar()
            }}
        >
            <div className={s.sidebarContent}>
                <button
                    className={s.closeBtn}
                    onClick={closeSidebar}
                >&times;</button>
                <nav className={s.sidebarMenu}>
                    <ul onClick={closeSidebar}>
                        <li>
                            <NavLink to='/profile' activeClassName={cn(isMyProfile && s.active)}>Profile</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
                        </li> */}
                        <li>
                            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                        </li>
                        <li>
                            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                        </li>
                    </ul>
                </nav>
                {/* <FriendsContainer /> */}
            </div>
        </section>
    )
}

export default Sidebar