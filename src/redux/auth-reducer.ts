import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { toggleHasError } from './app-reducer'

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'
const CLEAR_AUTH_DATA = 'auth/CLEAR_AUTH_DATA'
const TOGGLE_AUTH_LOADING = 'auth/TOGGLE_AUTH_LOADING'

export type AuthDataType = {
    id: number | null
    login: string | null
    email: string | null
}

export type InitialStateType = {
    authData: AuthDataType
    captcha: string | null
    isAuth: boolean
    isLoading: boolean
}

const initialState: InitialStateType = {
    authData: {
        id: null,
        login: null,
        email: null
    },
    captcha: null,
    isAuth: false,
    isLoading: false
}


const authReducer = (
    state = initialState,
    action: SetAuthDataActionType | ClearAuthDataActionType
        | ToggleIsAuthLoadingActionType | SetCaptchaActionType
): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                authData: {
                    id: action.authData.id,
                    login: action.authData.login,
                    email: action.authData.email,
                },
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


export type SetAuthDataActionType = {
    type: typeof SET_AUTH_DATA
    authData: AuthDataType
}
export const setAuthData = (authData: AuthDataType): SetAuthDataActionType =>
    ({ type: SET_AUTH_DATA, authData })


export type ClearAuthDataActionType = { type: typeof CLEAR_AUTH_DATA }
export const clearAuthData = (): ClearAuthDataActionType => ({ type: CLEAR_AUTH_DATA })


export type ToggleIsAuthLoadingActionType = {
    type: typeof TOGGLE_AUTH_LOADING
    isLoading: boolean
}
export const toggleAuthLoading = (isLoading: boolean): ToggleIsAuthLoadingActionType =>
    ({ type: TOGGLE_AUTH_LOADING, isLoading })


export type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captcha: string
}
export const setCaptcha = (captcha: string): SetCaptchaActionType =>
    ({ type: SET_CAPTCHA, captcha })


// ThunkCreators

export const requestAuthData = () => async (dispatch: Function) => {
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

export const sendLoginData = (loginData: object): Function => async (dispatch: Function) => {
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

export const logout = (): Function => async (dispatch: Function) => {
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