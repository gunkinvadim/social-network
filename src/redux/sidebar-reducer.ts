const TOGGLE_SHOW_SIDEBAR = 'sidebar/TOGGLE_SHOW_SIDEBAR'

export type FriendDataType = {
    id: number
    name: string
}

export type InitialStateType = {
    isSidebarShown: boolean
    friends: Array<FriendDataType>
}

const initialState: InitialStateType = {
    isSidebarShown: false,
    friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Vadim'}
    ]
}


const sidebarReducer = (state = initialState,
    action: ToggleShowSidebarType): InitialStateType => {
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


export type ToggleShowSidebarType = {
    type: typeof TOGGLE_SHOW_SIDEBAR
    showSidebar: boolean
}
export const toggleShowSidebar = (showSidebar: boolean): ToggleShowSidebarType => ({
    type: TOGGLE_SHOW_SIDEBAR,
    showSidebar
})

export default sidebarReducer