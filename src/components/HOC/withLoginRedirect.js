import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'


const withLoginRedirect = (Component) => {

    const RedirectComponent = (props) => {
        return props.isAuth ? <Component {...props} /> : <Redirect to='/login' />
    }

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })

    return connect(mapStateToProps)(RedirectComponent)
}

export default withLoginRedirect