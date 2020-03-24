import React from 'react'
import { connect } from 'react-redux'
import { requireFollow } from '../../../redux/users-reducer'
import User from './User'

class UserContainer extends React.Component {
    
    onFollow = (willFollow) => {
        const { userData: { id }, requireFollow } = this.props

        requireFollow(id, willFollow)
    }


    render() {

        const { userData } = this.props

        return <User
            userData={userData}
            onFollow={this.onFollow}
        />
    }
}



const mapDispatchToProps = {
    requireFollow
}

export default connect(null, mapDispatchToProps)(UserContainer)