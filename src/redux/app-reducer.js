import { requestAuthData } from "./auth-reducer"

const INIT_APP_SUCCESS = 'app/INIT_APP_SUCCESS'

const initialState = {
    isInit: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APP_SUCCESS:
            return {
                ...state,
                isInit: true
            }
        default:
            return state
    }
}

export const initAppSuccess = () => ({ type: INIT_APP_SUCCESS })

export const initApp = () => async (dispatch) => {
    await dispatch(requestAuthData())
    dispatch(initAppSuccess())
}

export default appReducer