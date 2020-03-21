import React from 'react'
import { header, loginBlock, logoutBtn } from './Header.module.css'
import Preloader from '../common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'

const Header = ({ isAuth, isLoading, login, logout }) => {
    return (
        <header className={header}>
            {isLoading ? <Preloader /> :  <div className={loginBlock}>
                {isAuth ? <p>Hi, <NavLink to='/profile/'>{login}</NavLink>!</p>
                    : <NavLink to='/login'>Login</NavLink>
                }
                {isAuth
                    ? <button 
                        className={logoutBtn}
                        onClick={logout}
                      >Logout</button>
                    : null
                }
            </div>}
        </header>
    )
}

export default Header