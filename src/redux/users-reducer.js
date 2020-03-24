import { usersAPI } from '../api/api'

const FOLLOW_SUCCESS = 'users/FOLLOW_SUCCESS'
const TOGGLE_FOLLOW_DISABLED = 'users/TOGGLE_FOLLOW_DISABLED'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const TOGGLE_USERS_LOADING = 'users/TOGGLE_USERS_LOADING'


const initialState = {
    users: null,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, followed: action.followed }
                    } else {
                        return item
                    }
                })
            }
        case TOGGLE_FOLLOW_DISABLED:
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
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
                totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_USERS_LOADING:
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

export const followSuccess = (id, followed) => ({ type: FOLLOW_SUCCESS, id, followed })
export const toggleFollowDisabled = (id, isFollowDisabled) => ({ type: TOGGLE_FOLLOW_DISABLED, id, isFollowDisabled })
export const setUsers = (users, totalUsersCount) => ({ type: SET_USERS, users, totalUsersCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleLoading = (isLoading) => ({ type: TOGGLE_USERS_LOADING, isLoading })

// ThunkCreators

export const requestUsers = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(toggleLoading(true))
    
    const { items, totalCount } = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(setUsers(items, totalCount))
    dispatch(toggleLoading(false))
}

export const requireFollow = (id, willFollow) => async (dispatch) => {
    dispatch(toggleFollowDisabled(id, true))

    const { resultCode }
        = await (willFollow
            ? usersAPI.followUser(id)
            : usersAPI.unfollowUser(id))
    if (resultCode === 0) dispatch(followSuccess(id, willFollow))
    dispatch(toggleFollowDisabled(id, false))
}