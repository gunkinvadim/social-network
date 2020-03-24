import React from 'react'
import { usersList, pagesList, selected, preloader } from './Users.module.css'
import UserContainer from './User/UserContainer'
import Preloader from '../common/Preloader/Preloader'
import Paginator from '../common/Paginator/Paginator'

const Users = ({ users, totalUsersCount, pageSize, currentPage, onPageChanged, isLoading }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    return (
        <div>
            <Paginator 
                pagesCount={pagesCount}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            {
                isLoading || !users ? 
                    <Preloader className={preloader} />
                :
                    <ul className={usersList}>
                        {users.map((u) => <UserContainer
                                key={u.id}
                                userData={u}
                        />)}
                    </ul>
            }
        </div>
    )
}

export default Users