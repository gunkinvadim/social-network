import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestProfile, toggleEditMode } from '../../redux/profile-reducer'
import Profile from './Profile'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import { getIsProfileLoading,
    getIsAuth, getAuthData, getIsMyProfile,
    getProfileEditMode } from '../../redux/selectors'

class ProfileContainer extends React.Component {

    updateProfilePage() {
        const { match, isAuth, authId, requestProfile } = this.props
        const userId = match.params.userId

        userId && userId != authId
            ? requestProfile(userId, false)
            : isAuth && requestProfile(authId, true)

        
    }

    componentDidMount() {
        this.updateProfilePage()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfilePage()
        }
    }

    componentWillUnmount() {
        this.props.toggleEditMode(false)
    }

    render() {
        const { isAuth, match, isLoading, isMyProfile, editMode } = this.props

        if (!match.params.userId && !isAuth) {
            return <Redirect to='/login' />
        }

        return isLoading ? <Preloader /> : <Profile
            isMyProfile={isMyProfile}
            editMode={editMode}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        isLoading: getIsProfileLoading(state),
        isAuth: getIsAuth(state),
        isMyProfile: getIsMyProfile(state),
        authId: getAuthData(state).id,
        editMode: getProfileEditMode(state)
    }
}

const mapDispatchToProps = {
    requestProfile,
    toggleEditMode
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)