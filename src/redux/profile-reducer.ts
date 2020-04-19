import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { getAuthData } from './selectors'
import { toggleHasError } from './app-reducer'

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const LIKE_POST = 'profile/LIKE_POST'
const SET_PROFILE = 'profile/SET_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const TOGGLE_STATUS_LOADING = 'profile/TOGGLE_STATUS_LOADING'
const TOGGLE_IS_MY_PROFILE = 'profile/TOGGLE_IS_MY_PROFILE'
const TOGGLE_PROFILE_LOADING = 'profile/TOGGLE_PROFILE_LOADING'
const TOGGLE_IS_EDIT_MODE = 'profile/TOGGLE_EDIT_MODE'
const TOGGLE_IS_PHOTO_UPDATING = 'profile/TOGGLE_IS_PHOTO_UPDATING'
const UPDATE_PHOTO_SUCCESS = 'profile/UPDATE_PHOTO_SUCCESS'


export type PhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type ProfileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type PostType = {
    id: number
    text: string
    likes: number
    isLiked: boolean
}

export type InitialStateType = {
    isLoading: boolean
    profileData: ProfileDataType | null
    isStatusLoading: boolean
    status: string | null,
    isMyProfile: boolean
    isEditMode: boolean
    isPhotoUpdating: boolean
    postsData: Array<PostType>
}

const initialState: InitialStateType = {
    isLoading: false,
    profileData: null,
    isStatusLoading: false,
    status: null,
    isMyProfile: false,
    isEditMode: false,
    isPhotoUpdating: false,
    postsData: [
        { id: 1, text: `Hi, how are you?`, likes: 0, isLiked: false },
        { id: 2, text: `It's my first post!`, likes: 0, isLiked: false },
        { id: 3, text: `111`, likes: 0, isLiked: false }
    ]
}


const profileReducer = (
    state = initialState,
    action: AddPostActionType | DeletePostActionType |
        LikePostActionType | SetProfileActionType |
        SetStatusActionType | ToggleStatusLoadingActionType |
        ToggleIsMyProfileActionType | ToggleLoadingActionType |
        ToggleEditModeActionType | ToggleIsPhotoUpdatingActionType |
        updatePhotoSuccessActionType
): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            let data = state.postsData
            return {
                ...state,
                postsData: [...data, {
                    id: data[data.length - 1].id + 1,
                    text: action.text,
                    likes: 0,
                    isLiked: false
                }]
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(item => item.id != action.id)
            }
        case LIKE_POST:
            return {
                ...state,
                postsData: state.postsData.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            likes: !item.isLiked ? item.likes + 1 : item.likes - 1,
                            liked: !item.isLiked
                        }
                    } else {
                        return {...item}
                    }
                })
            }
        case SET_PROFILE:
            return {
                ...state,
                profileData: {...action.profileData},
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case TOGGLE_STATUS_LOADING:
            return {
                ...state,
                isStatusLoading: action.isStatusLoading
            }
        case TOGGLE_IS_MY_PROFILE:
            return {
                ...state,
                isMyProfile: action.isMyProfile
            }
        case TOGGLE_PROFILE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TOGGLE_IS_EDIT_MODE:
            return {
                ...state,
                isEditMode: action.isEditMode
            }
        case TOGGLE_IS_PHOTO_UPDATING:
            return {
                ...state,
                isPhotoUpdating: action.isPhotoUpdating
            }
        case UPDATE_PHOTO_SUCCESS:
            return {
                ...state,
                profileData: state.profileData && {
                    ...state.profileData,
                    photos: {...action.photos}
                }
            }
        default:
            return state
    }
}
export default profileReducer


// ActionCreators


export type AddPostActionType = {
    type: typeof ADD_POST
    text: string
}
export const addPost = (text: string): AddPostActionType => ({
    type: ADD_POST,
    text
})


export type DeletePostActionType = {
    type: typeof DELETE_POST
    id: number
}
export const deletePost = (id: number): DeletePostActionType => ({
    type: DELETE_POST,
    id
})


export type LikePostActionType = {
    type: typeof LIKE_POST
    id: number
}
export const likePost = (id: number): LikePostActionType => ({
    type: LIKE_POST,
    id
})


export type SetProfileActionType = {
    type: typeof SET_PROFILE
    profileData: ProfileDataType
}
export const setProfile = (profileData: ProfileDataType): SetProfileActionType => ({
    type: SET_PROFILE,
    profileData
})


export type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({
    type: SET_STATUS,
    status
})


export type ToggleStatusLoadingActionType = {
    type: typeof TOGGLE_STATUS_LOADING
    isStatusLoading: boolean
}
export const toggleStatusLoading = (isStatusLoading: boolean):
    ToggleStatusLoadingActionType => ({
    type: TOGGLE_STATUS_LOADING,
    isStatusLoading
})


export type ToggleIsMyProfileActionType = {
    type: typeof TOGGLE_IS_MY_PROFILE
    isMyProfile: boolean
}
export const toggleIsMyProfile = (isMyProfile: boolean):
    ToggleIsMyProfileActionType => ({
    type: TOGGLE_IS_MY_PROFILE,
    isMyProfile
})


export type ToggleLoadingActionType = {
    type: typeof TOGGLE_PROFILE_LOADING
    isLoading: boolean
}
export const toggleLoading = (isLoading: boolean):
    ToggleLoadingActionType => ({
    type: TOGGLE_PROFILE_LOADING,
    isLoading
})


export type ToggleEditModeActionType = {
    type: typeof TOGGLE_IS_EDIT_MODE
    isEditMode: boolean
}
export const toggleEditMode = (isEditMode: boolean): ToggleEditModeActionType => ({
    type: TOGGLE_IS_EDIT_MODE,
    isEditMode
})


export type ToggleIsPhotoUpdatingActionType = {
    type: typeof TOGGLE_IS_PHOTO_UPDATING
    isPhotoUpdating: boolean
}
export const toggleIsPhotoUpdating = (isPhotoUpdating: boolean):
    ToggleIsPhotoUpdatingActionType => ({
    type: TOGGLE_IS_PHOTO_UPDATING,
    isPhotoUpdating
})


export type updatePhotoSuccessActionType = {
    type: typeof UPDATE_PHOTO_SUCCESS
    photos: PhotosType
}
export const updatePhotoSuccess = (photos: PhotosType):
updatePhotoSuccessActionType => ({
    type: UPDATE_PHOTO_SUCCESS,
    photos
})


// ThunkCreators

export const requestProfile = (id: number | null, isMyProfile: boolean): Function =>
    async (dispatch: Function) => {
    dispatch(toggleLoading(true))
    dispatch(toggleIsMyProfile(isMyProfile))

    try {
        const data = await profileAPI.getProfile(id)
        const statusData = await profileAPI.getStatus(id)
        dispatch(setProfile(data))
        dispatch(setStatus(statusData))
        dispatch(toggleLoading(false))
    } catch(err) {
        console.error(err)
        dispatch(toggleHasError(true))
        dispatch(toggleLoading(false))
    }
}

export const updateStatus = (status: string): Function =>
    async (dispatch: Function) => {
    dispatch(toggleStatusLoading(true))

    try {
        const { resultCode } = await profileAPI.updateStatus(status)
        if (resultCode === 0) dispatch(setStatus(status))
        dispatch(toggleStatusLoading(false))
    } catch(err) {
        console.error(err)
        dispatch(toggleHasError(true))
        dispatch(toggleStatusLoading(false))
    }
}

export const updateProfilePhoto = (file: string): Function =>
    async (dispatch: Function) => {
    dispatch(toggleIsPhotoUpdating(true))

    try {
        const { resultCode, data: {photos}, messages } = await profileAPI.updatePhoto(file)

        if (resultCode === 0) {
            dispatch(updatePhotoSuccess(photos))
            dispatch(toggleIsPhotoUpdating(false))
        } else {
            console.log(messages)
        }
    } catch(err) {
        console.error(err)
        dispatch(toggleHasError(true))
        dispatch(toggleIsPhotoUpdating(false))
    }
}

export const updateProfileData = (newProfileData: ProfileDataType) =>
    async (dispatch: Function, getState: Function) => {
    try {
        const { resultCode, messages } = await profileAPI.updateProfileData(newProfileData)
        if (resultCode === 0) {
            dispatch(requestProfile(getAuthData(getState()).id, true))
            dispatch(toggleEditMode(false))
        } else {
            dispatch(stopSubmit('editProfile', {_error: messages}))
        }
    } catch(err) {
        console.error(err)
        dispatch(toggleHasError(true))
    }
}