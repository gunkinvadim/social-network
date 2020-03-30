import { authAPI } from '../api/api'
import { stopSubmit, reset } from 'redux-form'
import { toggleHasError } from './app-reducer'

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'
const CLEAR_AUTH_DATA = 'auth/CLEAR_AUTH_DATA'
const TOGGLE_AUTH_LOADING = 'auth/TOGGLE_AUTH_LOADING'


const initialState = {
    authData: {
        id: null,
        login: null,
        email: null
    },
    captcha: null,
    isAuth: false,
    isLoading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                authData: {...action.authData},
                isAuth: true,
                captcha: null
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
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
export const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha })


// ThunkCreators

export const requestAuthData = () => async (dispatch) => {
    dispatch(toggleAuthLoading(true))

    try {
        const { resultCode, data } = await authAPI.getAuthData()
    
        if (resultCode === 0) dispatch(setAuthData(data))
        dispatch(toggleAuthLoading(false))
    } catch(err) {
        console.error(err)
        dispatch(toggleHasError(true))
        dispatch(toggleAuthLoading(false))
    }
}

export const sendLoginData = (loginData) => async (dispatch) => {
    try {
        const data = await authAPI.login(loginData)

        if (data.resultCode === 0) {
            dispatch(requestAuthData())
        } else if (data.resultCode === 10) {
            const captcha = await authAPI.getCaptcha()
            await dispatch(stopSubmit('login', {_error: data.messages}))
            dispatch(setCaptcha(captcha.url))
        } else {
            dispatch(stopSubmit('login', {_error: data.messages}))
        }
    } catch(err) {
        console.error(err)
        dispatch(toggleHasError(true))
    }
}

export const logout = () => async (dispatch) => {
    dispatch(toggleAuthLoading(true))
    
    try {
        const { resultCode } = await authAPI.logout()

        if (resultCode === 0) {
            dispatch(toggleAuthLoading(false))
            dispatch(clearAuthData())
        }
    } catch(err) {
        console.error(err)
        dispatch(toggleHasError(true))
        dispatch(toggleAuthLoading(false))
    }
}

export default authReducer