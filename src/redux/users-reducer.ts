import { usersAPI } from '../api/api'
import { toggleHasError } from './app-reducer'

const FOLLOW_SUCCESS = 'users/FOLLOW_SUCCESS'
const TOGGLE_FOLLOW_DISABLED = 'users/TOGGLE_FOLLOW_DISABLED'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const TOGGLE_USERS_LOADING = 'users/TOGGLE_USERS_LOADING'

export type PhotosType = {
    small: string | null
    large: string | null
}

export type UserDataType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
    isFollowDisabled?: boolean
}

export type InitialStateType = {
    users: Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

const usersReducer = (
    state = initialState,
    action: FollowSuccessType | ToggleFollowDisabledType
        | SetUsersType | SetCurrentPageType | ToggleLoadingType
    ): InitialStateType => {

    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, followed: action.isFollowed }
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

export type FollowSuccessType = {
    type: typeof FOLLOW_SUCCESS
    id: number
    isFollowed: boolean
}
export const followSuccess = (id: number, isFollowed: boolean): FollowSuccessType => ({
    type: FOLLOW_SUCCESS,
    id,
    isFollowed
})

export type ToggleFollowDisabledType = {
    type: typeof TOGGLE_FOLLOW_DISABLED
    id: number
    isFollowDisabled: boolean
}
export const toggleFollowDisabled = (id: number,
    isFollowDisabled: boolean): ToggleFollowDisabledType => ({
    type: TOGGLE_FOLLOW_DISABLED,
    id,
    isFollowDisabled
})

export type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserDataType>
    totalUsersCount: number
}
export const setUsers = (users: Array<UserDataType>,
    totalUsersCount: number): SetUsersType => ({
    type: SET_USERS,
    users,
    totalUsersCount
})

export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export type ToggleLoadingType = {
    type: typeof TOGGLE_USERS_LOADING
    isLoading: boolean
}
export const toggleLoading = (isLoading: boolean): ToggleLoadingType => ({
    type: TOGGLE_USERS_LOADING,
    isLoading
})


// ThunkCreators

export const requestUsers = (pageNumber: number, pageSize: number): Function =>
    async (dispatch: Function) => {
    dispatch(toggleLoading(true))
    
    const { items, totalCount } = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(setUsers(items, totalCount))
    dispatch(toggleLoading(false))
}

export const requireFollow = (id: number, willFollow: boolean): Function =>
    async (dispatch: Function) => {
    dispatch(toggleFollowDisabled(id, true))

    try {
        const { resultCode } = await (willFollow
            ? usersAPI.followUser(id)
            : usersAPI.unfollowUser(id))
    if (resultCode === 0) dispatch(followSuccess(id, willFollow))
    dispatch(toggleFollowDisabled(id, false))
    } catch(err) {
        console.error(err)
        dispatch(toggleHasError(true))
        dispatch(toggleFollowDisabled(id, false))
    }
}