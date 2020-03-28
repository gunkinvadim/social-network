const SEND_MESSAGE = 'messages/SEND_MESSAGE'


const initialState = {
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


const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let data = state.messagesData
            return  {
                ...state,
                messagesData: [...data, {
                    id: data[data.length - 1].id + 1,
                    text: action.text
                }],
                newMessageText: ''
            }
        default:
            return state
    }
}


export const sendMessage = (text) => ({
    type: SEND_MESSAGE,
    text
})


export default messagesReducer