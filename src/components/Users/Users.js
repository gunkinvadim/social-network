import React from 'react'
import { usersList, pagesList, selected, preloader } from './Users.module.css'
import UserContainer from './User/UserContainer'
import Preloader from '../common/Preloader/Preloader'

const Users = ({ users, totalUsersCount, pageSize, currentPage, onPageChanged, isLoading }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const pagination = pages.map((p, i, arr) => {
        if (((p <= currentPage + 3) && (p >= currentPage - 3))
            || (p === 1) || (p === arr.length)) {
            return (
                <button
                    key={p}
                    className={p === currentPage ? selected : ''}
                    onClick={p === currentPage ? null : () => onPageChanged(p)}
                >{
                    (((p === currentPage - 3) && (p !== 1))
                    || ((p === currentPage + 3) && (p !== arr.length))) ? '...' : p
                }
                </button>
            )
        }
    })

    return (
        <div>
            <div className={pagesList}>
                {pagination}
            </div>
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