import React from 'react'
import { connect } from 'react-redux'
import { requireFollow, UserDataType } from '../../../redux/users-reducer'
import User from './User'
import { getIsAuth } from '../../../redux/selectors'

type PropsType = {
    userData: UserDataType
    requireFollow: (id: number, willFollow: boolean) => Function
    isAuth: boolean
}

const UserContainer: React.FC<PropsType> = ({ userData, requireFollow, isAuth }) => {
    
    const onFollow = (willFollow: boolean): void => {
        requireFollow(userData.id, willFollow)
    }

    return <User
        isAuth={isAuth}
        userData={userData}
        onFollow={onFollow}
    />
}

const mapStateToProps = (state: object) => ({
    isAuth: getIsAuth(state)
})

const mapDispatchToProps = {
    requireFollow
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)