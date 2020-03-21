import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import { getIsProfileLoading, getProfileData,
    getIsAuth, getAuthData } from '../../redux/selectors'

class ProfileContainer extends React.Component {

    componentDidMount() {
        const { match, authId, requestProfile } = this.props
        const userId = match.params.userId

        userId ? requestProfile(userId, false) : requestProfile(authId, true)
    }

    render() {
        const { isAuth, match, isLoading, profileData } = this.props

        if (!match.params.userId && !isAuth) {
            return <Redirect to='/login' />
        }

        return isLoading ? <Preloader /> : <Profile
            profileData={profileData}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        isLoading: getIsProfileLoading(state),
        profileData: getProfileData(state),
        isAuth: getIsAuth(state),
        authId: getAuthData(state).id
    }
}

const mapDispatchToProps = {
    requestProfile
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)