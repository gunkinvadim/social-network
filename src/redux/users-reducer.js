import { usersAPI } from '../api/api'

const initialState = {
    users: null,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FOLLOW_SUCCESS':
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, followed: true }
                    } else {
                        return item
                    }
                })
            }
        case 'UNFOLLOW_SUCCESS':
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, followed: false }
                    } else {
                        return item
                    }
                })
            }
        case 'TOGGLE_FOLLOW_DISABLED':
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, isFollowDisabled: action.isFollowDisabled }
                    } else {
                        return item
                    }
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...action.users],
                totalUsersCount: action.totalUsersCount
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'TOGGLE_USERS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default usersReducer

// ActionCreators

export const followSuccess = (id) => ({ type: 'FOLLOW_SUCCESS', id })
export const unfollowSuccess = (id) => ({ type: 'UNFOLLOW_SUCCESS', id })
export const toggleFollowDisabled = (id, isFollowDisabled) => ({ type: 'TOGGLE_FOLLOW_DISABLED', id, isFollowDisabled })
export const setUsers = (users, totalUsersCount) => ({ type: 'SET_USERS', users, totalUsersCount })
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage })
export const toggleLoading = (isLoading) => ({ type: 'TOGGLE_USERS_LOADING', isLoading })

// ThunkCreators

export const requestUsers = (pageNumber, pageSize) => (dispatch) => {
    dispatch(toggleLoading(true))
    
    usersAPI.getUsers(pageNumber, pageSize)
        .then(({ items, totalCount }) => {
            dispatch(setUsers(items, totalCount))
            dispatch(toggleLoading(false))
        })
}

export const requireFollow = (id) => (dispatch) => {
    dispatch(toggleFollowDisabled(id, true))

    usersAPI.followUser(id)
        .then(({ resultCode }) => {
            if (resultCode === 0) dispatch(followSuccess(id))
            dispatch(toggleFollowDisabled(id, false))
        })
}

export const requireUnfollow = (id) => (dispatch) => {
    dispatch(toggleFollowDisabled(id, true))

    usersAPI.unfollowUser(id)
        .then(({ resultCode }) => {
            if (resultCode === 0) dispatch(unfollowSuccess(id))
            dispatch(toggleFollowDisabled(id, false))
        })
}