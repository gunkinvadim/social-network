import { requestAuthData } from "./auth-reducer"

const INIT_APP_SUCCESS = 'app/INIT_APP_SUCCESS'
const TOGGLE_HAS_ERROR = 'app/TOGGLE_HAS_ERROR'

const initialState = {
    isInit: false,
    hasError: false
}

const appReducer = (state = initialState, action) => {
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

export const initAppSuccess = () => ({ type: INIT_APP_SUCCESS })
export const toggleHasError = (hasError) => ({ type: TOGGLE_HAS_ERROR, hasError })

export const initApp = () => async (dispatch) => {
    await dispatch(requestAuthData())
    dispatch(initAppSuccess())
}

export default appReducer