import React from 'react'
import s from './Users.module.css'
import UserContainer from './User/UserContainer'
import Preloader from '../common/Preloader/Preloader'
import Paginator from '../common/Paginator/Paginator'
import { UserDataType } from '../../redux/users-reducer'

type PropsType = {
    users: Array<UserDataType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    isLoading: boolean
}

const Users: React.FC<PropsType> = ({ users, totalUsersCount, pageSize, currentPage,
    onPageChanged, isLoading }) => {

    return (
        <div>
            <Paginator 
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />
            {isLoading || !users
            ? <Preloader />
            : <ul className={s.usersList}>
                {users.map((u) => <UserContainer
                        key={u.id}
                        userData={u}
                />)}
            </ul>}
        </div>
    )
}

export default Users