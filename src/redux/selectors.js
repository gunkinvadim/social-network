import { createSelector } from "reselect"

export const getAuthData = (state) => state.auth.authData
export const getIsAuth = (state) => state.auth.isAuth
export const getIsAuthLoading = (state) => state.auth.isLoading

export const getIsProfileLoading = (state) => state.profilePage.isLoading
export const getProfileData = (state) => state.profilePage.profileData
export const getIsStatusLoading = (state) => state.profilePage.isStatusLoading
export const getProfileStatus = (state) => state.profilePage.status
export const getIsMyProfile = (state) => state.profilePage.isMyProfile
export const getPostsData = (state) => state.profilePage.postsData

export const getDialogs = (state) => state.messagesPage.dialogsData
export const getMessages = (state) => state.messagesPage.messagesData

export const getIsAppInit = (state) => state.app.isInit

export const getFriendsList = (state) => state.sidebar.friends

export const getUsers = (state) => state.usersPage.users
export const getPageSize = (state) => state.usersPage.pageSize
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount
export const getCurrentPage = (state) => state.usersPage.currentPage
export const getIsUsersLoading = (state) => state.usersPage.isLoading


export const getUsersFiltered = createSelector(getUsers, (users) => users && users.filter(u => true))