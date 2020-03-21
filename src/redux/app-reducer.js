import { getAuthData } from "./auth-reducer"

const initialState = {
    isInit: false
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INIT_APP_SUCCESS':
            return {
                ...state,
                isInit: true
            }
        default:
            return state
    }
}

export const initAppSuccess = () => ({ type: 'INIT_APP_SUCCESS' })

export const initApp = () => (dispatch) => {
    dispatch(getAuthData())
        .then(() => dispatch(initAppSuccess()))
}

export default appReducer