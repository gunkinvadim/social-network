import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/redux-store'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'


ReactDOM.render(
    <HashRouter>
        <Provider store={store} >
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)