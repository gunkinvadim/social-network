import React from 'react'
import { connect } from 'react-redux'
import { requireFollow } from '../../../redux/users-reducer'
import User from './User'
import { getIsAuth } from '../../../redux/selectors'

class UserContainer extends React.Component {
    
    onFollow = (willFollow) => {
        const { userData: { id }, requireFollow } = this.props

        requireFollow(id, willFollow)
    }


    render() {

        const { isAuth, userData } = this.props

        return <User
            isAuth={isAuth}
            userData={userData}
            onFollow={this.onFollow}
        />
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

const mapDispatchToProps = {
    requireFollow
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)