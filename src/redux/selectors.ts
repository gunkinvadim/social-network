import { UserDataType } from './users-reducer';
import { FriendDataType } from './sidebar-reducer';
import { AuthDataType } from './auth-reducer';
import { createSelector } from 'reselect'
import { ProfileDataType, PostType } from './profile-reducer';
import { DialogType, MessageType } from './messages-reducer';


export const getAuthData = (state: any): AuthDataType => state.auth.authData
export const getIsAuth = (state: any): boolean => state.auth.isAuth
export const getIsAuthLoading = (state: any): boolean => state.auth.isLoading
export const getCaptcha = (state: any): string | null => state.auth.captcha

export const getIsProfileLoading = (state: any):boolean => state.profilePage.isLoading
export const getProfileData = (state: any): ProfileDataType => state.profilePage.profileData
export const getProfileIsEditMode = (state: any): boolean => state.profilePage.isEditMode
export const getIsStatusLoading = (state: any): boolean => state.profilePage.isStatusLoading
export const getProfileStatus = (state: any): string | null => state.profilePage.status
export const getIsMyProfile = (state: any): boolean => state.profilePage.isMyProfile
export const getPostsData = (state: any): Array<PostType> => state.profilePage.postsData
export const getIsPhotoUpdating = (state: any): boolean => state.profilePage.isPhotoUpdating

export const getDialogs = (state: any): Array<DialogType> => state.messagesPage.dialogsData
export const getMessages = (state: any): Array<MessageType> => state.messagesPage.messagesData

export const getIsAppInit = (state: any): boolean => state.app.isInit
export const getHasError = (state: any): boolean => state.app.hasError

export const getIsSidebarShown = (state: any): boolean => state.sidebar.isSidebarShown
export const getFriendsList = (state: any): Array<FriendDataType> => state.sidebar.friends

export const getUsers = (state: any): Array<UserDataType> => state.usersPage.users
export const getPageSize = (state: any): number => state.usersPage.pageSize
export const getTotalUsersCount = (state: any): number => state.usersPage.totalUsersCount
export const getCurrentPage = (state: any): number => state.usersPage.currentPage
export const getIsUsersLoading = (state: any): boolean => state.usersPage.isLoading

export const getEditProfileInfoForm = (state: any): any => state.form.editProfile


export const getUsersFiltered = createSelector(getUsers,
    (users) => users && users.filter((u: UserDataType): boolean => true))