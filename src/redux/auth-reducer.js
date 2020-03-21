import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'


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
        case 'SET_AUTH_DATA':
            return {
                ...state,
                authData: {...action.authData},
                isAuth: true
            }
        case 'CLEAR_AUTH_DATA':
            return {
                ...state,
                authData: {
                    id: null,
                    login: null,
                    email: null
                },
                isAuth: false
            }
        case 'TOGGLE_AUTH_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

// ActionCreators

export const setAuthData = (authData) => ({ type: 'SET_AUTH_DATA', authData })
export const clearAuthData = () => ({ type: 'CLEAR_AUTH_DATA' })
export const toggleAuthLoading = (isLoading) => ({ type: 'TOGGLE_AUTH_LOADING', isLoading })


// ThunkCreators

export const getAuthData = () => (dispatch) => {
    dispatch(toggleAuthLoading(true))

    return authAPI.getAuthData()
        .then(({ data, resultCode }) => {
            if (resultCode === 0) dispatch(setAuthData(data))
            dispatch(toggleAuthLoading(false))
        })
}

export const sendLoginData = (loginData) => (dispatch) => {
    authAPI.login(loginData)
        .then(({ resultCode, messages }) => {
            if (resultCode === 0) {
                dispatch(getAuthData())
            } else {
                dispatch(stopSubmit('login', {_error: messages}))
            }
        })
}

export const logout = () => (dispatch) => {
    dispatch(toggleAuthLoading(true))

    authAPI.logout()
        .then(({ resultCode }) => {
            if (resultCode === 0) {
                dispatch(toggleAuthLoading(false))
                dispatch(clearAuthData())
            }
        }) 
}

export default authReducer