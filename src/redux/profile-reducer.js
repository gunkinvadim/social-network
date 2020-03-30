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
const TOGGLE_EDIT_MODE = 'profile/TOGGLE_EDIT_MODE'
const TOGGLE_IS_PHOTO_UPDATING = 'profile/TOGGLE_IS_PHOTO_UPDATING'
const UPDATE_PHOTO_SUCCESS = 'profile/UPDATE_PHOTO_SUCCESS'


const initialState = {
    isLoading: false,
    profileData: null,
    isStatusLoading: false,
    status: null,
    isMyProfile: false,
    editMode: false,
    isPhotoUpdating: false,
    postsData: [
        { id: 1, text: `Hi, how are you?`, likes: 0, liked: false },
        { id: 2, text: `It's my first post!`, likes: 0, liked: false },
        { id: 3, text: `111`, likes: 0, liked: false }
    ]
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let data = state.postsData
            return {
                ...state,
                postsData: [...data, {
                    id: data[data.length - 1].id + 1,
                    text: action.text,
                    likes: 0,
                    liked: false
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
                            likes: !item.liked ? item.likes + 1 : item.likes - 1,
                            liked: !item.liked
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
        case TOGGLE_EDIT_MODE:
            return {
                ...state,
                editMode: action.editMode
            }
        case TOGGLE_IS_PHOTO_UPDATING:
            return {
                ...state,
                isPhotoUpdating: action.isPhotoUpdating
            }
        case UPDATE_PHOTO_SUCCESS:
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    photos: {...action.photos}
                }
            }
        default:
            return state
    }
}


// ActionCreators


export const addPost = (text) => ({
    type: ADD_POST,
    text
})
export const deletePost = (id) => ({
    type: DELETE_POST,
    id
})
export const likePost = (id) => ({
    type: LIKE_POST,
    id
})
export const setProfile = (profileData) => ({
    type: SET_PROFILE,
    profileData
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const toggleStatusLoading = (isStatusLoading) => ({
    type: TOGGLE_STATUS_LOADING,
    isStatusLoading
})
export const toggleIsMyProfile = (isMyProfile) => ({
    type: TOGGLE_IS_MY_PROFILE,
    isMyProfile
})
export const toggleLoading = (isLoading) => ({ type: TOGGLE_PROFILE_LOADING, isLoading })
export const toggleEditMode = (editMode) => ({ type: TOGGLE_EDIT_MODE, editMode })
export const toggleIsPhotoUpdating = (isPhotoUpdating) => ({
    type: TOGGLE_IS_PHOTO_UPDATING,
    isPhotoUpdating
})
export const updatePhotoSuccess = (photos) => ({
    type: UPDATE_PHOTO_SUCCESS,
    photos
})


// ThunkCreators

export const requestProfile = (id, isMyProfile) => async (dispatch) => {
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

export const updateStatus = (status) => async (dispatch) => {
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

export const updateProfilePhoto = (file) => async (dispatch) => {
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

export const updateProfileData = (newProfileData) => async (dispatch, getState) => {
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

export default profileReducer