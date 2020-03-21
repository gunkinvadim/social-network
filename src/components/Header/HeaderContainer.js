import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer'
import Header from './Header'

class HeaderContainer extends React.Component {

    render() {
        const { isAuth, isLoading, authData, logout } = this.props

        return <Header
            isAuth={isAuth}
            isLoading={isLoading}
            login={authData.login}
            logout={logout}
        />
    }
}

const mapStateToProps = (state) => {
    const { authData, isLoading, isAuth } = state.auth

    return { authData, isLoading, isAuth }
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)