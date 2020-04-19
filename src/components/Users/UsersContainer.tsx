import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { setCurrentPage, requestUsers,
    UserDataType, SetCurrentPageType } from '../../redux/users-reducer'
import { getUsers, getTotalUsersCount,
    getPageSize, getCurrentPage, getIsUsersLoading } from '../../redux/selectors'

type PropsType = {
    users: Array<UserDataType>
    currentPage: number
    pageSize: number
    requestUsers: (pageNumber: number, pageSize: number) => Function
    setCurrentPage: (currentPage: number) => SetCurrentPageType
    totalUsersCount: number
    isLoading: boolean
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const { users, currentPage, pageSize, requestUsers } = this.props
        if (!users[0]) requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const { pageSize, setCurrentPage, requestUsers } = this.props

        setCurrentPage(pageNumber)

        requestUsers(pageNumber, pageSize)
    }


    render() {
        const { users, totalUsersCount, pageSize, currentPage, isLoading } = this.props

        return (
            <Users
                users={users}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={this.onPageChanged} 
                isLoading={isLoading}
            />
        )
    }
}


const mapStateToProps = (state: object) => ({
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsUsersLoading(state)
})

const mapDispatchToProps = {
    setCurrentPage,
    requestUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)