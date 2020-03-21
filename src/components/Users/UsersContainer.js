import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { setCurrentPage, requestUsers } from './../../redux/users-reducer'
import { getUsers, getTotalUsersCount,
    getPageSize, getCurrentPage, getIsUsersLoading } from '../../redux/selectors'


class UsersContainer extends React.Component {

    componentDidMount() {
        const { users, currentPage, pageSize, requestUsers } = this.props

        if (!users) requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
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


const mapStateToProps = (state) => ({
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