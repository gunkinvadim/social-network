import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import sidebarReducer from './sidebar-reducer'

const store = {
    _state: {
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Katya' },
                { id: 4, name: 'Sasha' }
            ],
            messagesData: [
                { id: 1, text: 'Hi!' },
                { id: 2, text: 'How are you?' },
                { id: 3, text: 'Love You!' }
            ],
            newMessageText: ''
        },
     
        profilePage: {
            postsData: [
                { id: 1, text: `Hi, how are you?`, likes: 1 },
                { id: 2, text: `It's my first post!`, likes: 5 },
                { id: 3, text: `Fuck You!`, likes: 16 }
            ],
            newPostText: ''
        },
    
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sergey'},
                {id: 3, name: 'Vadim'}
            ]
        },
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('no observer!')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }
}

export default store
window.store = store