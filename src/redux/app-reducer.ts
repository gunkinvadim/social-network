import { requestAuthData } from "./auth-reducer"

const INIT_APP_SUCCESS = 'app/INIT_APP_SUCCESS'
const TOGGLE_HAS_ERROR = 'app/TOGGLE_HAS_ERROR'

export type InitialStateType = {
    isInit: boolean
    hasError: boolean
}

const initialState: InitialStateType = {
    isInit: false,
    hasError: false
}


const appReducer = (
    state = initialState,
    action: InitAppSuccessActionType | ToggleHasErrorActionType
): InitialStateType => {
    switch (action.type) {
        case INIT_APP_SUCCESS:
            return {
                ...state,
                isInit: true
            }
        case TOGGLE_HAS_ERROR:
            return {
                ...state,
                hasError: action.hasError
            }
        default:
            return state
    }
}

export type InitAppSuccessActionType = {
    type: typeof INIT_APP_SUCCESS
}
export const initAppSuccess = (): InitAppSuccessActionType =>
    ({ type: INIT_APP_SUCCESS })


export type ToggleHasErrorActionType = {
    type: typeof TOGGLE_HAS_ERROR
    hasError: boolean
}
export const toggleHasError = (hasError: boolean): ToggleHasErrorActionType =>
    ({ type: TOGGLE_HAS_ERROR, hasError })


export const initApp = (): Function => async (dispatch: Function) => {
    await dispatch(requestAuthData())
    dispatch(initAppSuccess())
}

export default appReducer