import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'


const withLoginRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            const { isAuth } = this.props

            return isAuth ? <Component {...this.props} /> : <Redirect to='/login' />
        }
    }

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })

    return connect(mapStateToProps)(RedirectComponent)
}

export default withLoginRedirect