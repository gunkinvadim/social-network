const SEND_MESSAGE = 'messages/SEND_MESSAGE'

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    text: string
}

export type InitialStateType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

const initialState: InitialStateType = {
    dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Katya' },
        { id: 4, name: 'Sasha' }
    ],
    messagesData: [
        { id: 1, text: 'Hi!' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: '111' }
    ]
}


const messagesReducer = (state = initialState,
    action: sendMessageActionType): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let data = state.messagesData
            return  {
                ...state,
                messagesData: [...data, {
                    id: data[data.length - 1].id + 1,
                    text: action.text
                }]
            }
        default:
            return state
    }
}
export default messagesReducer


export type sendMessageActionType = {
    type: typeof SEND_MESSAGE
    text: string
}
export const sendMessage = (text: string): sendMessageActionType => ({
    type: SEND_MESSAGE,
    text
})