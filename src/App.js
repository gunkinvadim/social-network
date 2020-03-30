import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import { initApp, toggleHasError } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import { getIsAppInit, getHasError, getIsAuth } from './redux/selectors'
import withSuspense from './components/HOC/withSuspense'
import ErrorPopupContainer from './components/modals/ErrorPopup/ErrorPopupContainer'

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const Music = lazy(() => import('./components/Music/Music'))
const News = lazy(() => import('./components/News/News'))
const SettingsContainer = lazy(() => import('./components/Settings/SettingsContainer'))
const LoginContainer = lazy(() => import('./components/Login/LoginContainer'))


class App extends React.Component {

  catchAllUnhandleErrors = (promiseRejectionEvent) => {
    this.props.toggleHasError(true)
    console.error(promiseRejectionEvent)
  }

  componentDidMount() {
    this.props.initApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandleErrors)
  }

  render() {
    const {isInit, hasError} = this.props

    if (!isInit) {
      return (
        <div className='preloader-container'>
          <Preloader />
        </div>
      )
    }

    return (
      <div className='app-wrapper'>
        {hasError && <ErrorPopupContainer />}
        <HeaderContainer />
        <SidebarContainer />
        <div className='app-wrapper-content'>
          <Switch>
            <Route
              path='/profile/:userId?'
              render={withSuspense(ProfileContainer)}
            />
            <Route path='/messages'
              render={withSuspense(MessagesContainer)}
            />
            <Route path='/news' render={withSuspense(News)}
            />
            <Route path='/music' render={withSuspense(Music)}
            />
            <Route path='/users' render={withSuspense(UsersContainer)}
            />
            <Route path='/settings' render={withSuspense(SettingsContainer)}
            />
            <Route path='/login' render={withSuspense(LoginContainer)}
            />
            <Redirect to='/profile' />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isInit: getIsAppInit(state),
  hasError: getHasError(state),
  isAuth: getIsAuth(state)
})

const mapDispatchToProps = {
  initApp,
  toggleHasError
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App)