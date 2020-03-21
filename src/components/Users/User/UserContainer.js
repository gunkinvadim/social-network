import React from 'react'
import { connect } from 'react-redux'
import { requireFollow, requireUnfollow } from '../../../redux/users-reducer'
import User from './User'

class UserContainer extends React.Component {
    
    onFollow = () => {
        const { userData: { id }, requireFollow } = this.props

        requireFollow(id)
    }

    onUnfollow = () => {
        const { userData: { id }, requireUnfollow } = this.props

        requireUnfollow(id)
    }


    render() {

        const { userData } = this.props

        return <User
            userData={userData}
            onFollow={this.onFollow}
            onUnfollow={this.onUnfollow}
        />
    }
}



const mapDispatchToProps = {
    requireFollow,
    requireUnfollow
}

export default connect(null, mapDispatchToProps)(UserContainer)