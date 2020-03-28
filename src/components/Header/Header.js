import React from 'react'
import s from './Header.module.css'
import Preloader from '../common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'

const Header = ({ isAuth, isLoading, login, logout }) => {
    return (
        <header className={s.header}>
            {isLoading ? <Preloader /> :  <div className={s.loginBlock}>
                {isAuth ? <p>Hi, <NavLink to='/profile/'>{login}</NavLink>!</p>
                    : <NavLink to='/login'>Login</NavLink>
                }
                {isAuth
                    ? <button 
                        className={s.logoutBtn}
                        onClick={logout}
                      >Logout</button>
                    : null
                }
            </div>}
        </header>
    )
}

export default Header