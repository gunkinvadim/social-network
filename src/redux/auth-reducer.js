import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA'
const CLEAR_AUTH_DATA = 'auth/CLEAR_AUTH_DATA'
const TOGGLE_AUTH_LOADING = 'auth/TOGGLE_AUTH_LOADING'


const initialState = {
    authData: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false,
    isLoading: false
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                authData: {...action.authData},
                isAuth: true
            }
        case CLEAR_AUTH_DATA:
            return {
                ...state,
                authData: {
                    id: null,
                    login: null,
                    email: null
                },
                isAuth: false
            }
        case TOGGLE_AUTH_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

// ActionCreators

export const setAuthData = (authData) => ({ type: SET_AUTH_DATA, authData })
export const clearAuthData = () => ({ type: CLEAR_AUTH_DATA })
export const toggleAuthLoading = (isLoading) => ({ type: TOGGLE_AUTH_LOADING, isLoading })


// ThunkCreators

export const getAuthData = () => async (dispatch) => {
    dispatch(toggleAuthLoading(true))

    const { resultCode, data } = await authAPI.getAuthData()
    
    if (resultCode === 0) dispatch(setAuthData(data))
    dispatch(toggleAuthLoading(false))
}

export const sendLoginData = (loginData) => async (dispatch) => {
    const { resultCode, messages } = await authAPI.login(loginData)

    if (resultCode === 0) {
        dispatch(getAuthData())
    } else {
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const logout = () => async (dispatch) => {
    dispatch(toggleAuthLoading(true))

    const { resultCode } = await authAPI.logout()

    if (resultCode === 0) {
        dispatch(toggleAuthLoading(false))
        dispatch(clearAuthData())
    }
}

export default authReducer