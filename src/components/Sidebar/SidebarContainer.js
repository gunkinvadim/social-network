import React from 'react'
import Sidebar from './Sidebar'
import { getIsMyProfile, getIsSidebarShown } from "../../redux/selectors"
import { toggleShowSidebar } from '../../redux/sidebar-reducer'
import { connect } from 'react-redux'

const SidebarContainer = ({ isMyProfile, isSidebarShown, toggleShowSidebar }) => {

    const closeSidebar = () => {
            toggleShowSidebar(false)    
    }

    return <Sidebar
        isMyProfile={isMyProfile}
        isSidebarShown={isSidebarShown}
        closeSidebar={closeSidebar}
    />
}

const mapStateToProps = (state) => ({
    isMyProfile: getIsMyProfile(state),
    isSidebarShown: getIsSidebarShown(state)
})

const mapDispatchToProps = {
    toggleShowSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)