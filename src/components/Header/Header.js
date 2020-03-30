import React from 'react'
import s from './Header.module.css'
import cn from 'classnames'
import Preloader from '../common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'

const Header = ({ isAuth, isLoading, login, onMenuBtnClick, logout }) => {
    return (
        <header className={s.header}>
            <button
                className={cn(s.headerBtn, s.menuBtn)}
                onClick={onMenuBtnClick}
            >
                Menu
            </button>
            {isLoading ? <Preloader /> :  <div className={s.greetingBlock}>
                {isAuth && <p>Hi, <NavLink to='/profile/'>{login}</NavLink>!</p>}
                {isAuth
                    ? <button 
                        className={`${s.headerBtn} ${s.logoutBtn}`}
                        onClick={logout}
                      >Logout</button>
                    : <NavLink to='/login'>
                        <button className={cn(s.headerBtn, s.loginBtn)}>
                            Login
                        </button>
                    </NavLink>
                }
            </div>}
        </header>
    )
}

export default Header