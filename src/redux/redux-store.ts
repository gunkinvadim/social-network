import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import appReducer from './app-reducer'
import sidebarReducer from './sidebar-reducer'
import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    app: appReducer,
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers, 
    applyMiddleware(thunk)
)
// window.store = store

export default store