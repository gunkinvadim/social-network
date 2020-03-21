import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Sidebar from './components/Sidebar/Sidebar'
import ProfileContainer from './components/Profile/ProfileContainer'
import MessagesContainer from './components/Messages/MessagesContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import SettingsContainer from './components/Settings/SettingsContainer'
import UsersContainer from './components/Users/UsersContainer'
import LoginContainer from './components/Login/LoginContainer'
import { initApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import { getIsAppInit, getIsAuth } from './redux/selectors'

class App extends React.Component {

  componentDidMount() {
    const { initApp } = this.props

    initApp()
  }

  render() {
    const { isInit } = this.props

    if (!isInit) {
      return (
        <div className='preloader-container'>
          <Preloader />
        </div>
      )
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route
              path='/profile/:userId?'
              render={() => <ProfileContainer />}
            />
            <Route path='/messages'
              render={() => <MessagesContainer />}
            />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/settings' render={() => <SettingsContainer />} />
            <Route path='/login' render={() => <LoginContainer />} />
            <Redirect to='/news' />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isInit: getIsAppInit(state),
  isAuth: getIsAuth(state)
})

const mapDispatchToProps = {
  initApp
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App)