import React from 'react'
import { connect } from 'react-redux'
import { toggleShowSidebar } from '../../redux/sidebar-reducer'
import { logout } from '../../redux/auth-reducer'
import Header from './Header'

const HeaderContainer = ({ isAuth, isLoading, authData, toggleShowSidebar, logout }) => {

    const onMenuBtnClick = () => {
        toggleShowSidebar(true)
    }

    return <Header
        isAuth={isAuth}
        isLoading={isLoading}
        login={authData.login}
        logout={logout}
        onMenuBtnClick={onMenuBtnClick}
    />
}

const mapStateToProps = (state) => {
    const { authData, isLoading, isAuth } = state.auth

    return { authData, isLoading, isAuth }
}

const mapDispatchToProps = {
    toggleShowSidebar,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)