const TOGGLE_SHOW_SIDEBAR = 'sidebar/TOGGLE_SHOW_SIDEBAR'


const initialState = {
    isSidebarShown: false,
    friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Vadim'}
    ]
}


const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_SIDEBAR:
            return {
                ...state,
                isSidebarShown: action.showSidebar
            }
        default:
            return state
    }
}

export const toggleShowSidebar = (showSidebar) => ({ type: TOGGLE_SHOW_SIDEBAR, showSidebar })

export default sidebarReducer