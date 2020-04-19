import profileReducer, { addPost, deletePost, likePost } from './profile-reducer'
import { InitialStateType } from './profile-reducer'


const state: InitialStateType = {
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
        { id: 3, text: `Fuck You!`, likes: 0, isLiked: false }
    ]
}

test('new post should be added', () => {
    // 1. test data
    const action = addPost('test')


    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(4)
    expect(newState.postsData[3].id).toBe(4)
    expect(newState.postsData[3].text).toBe('test')
})

test('after deleting length of messages should be decremented', () => {
    const action = deletePost(1)

    const newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(2)
})

test('post should be liked', () => {
    const action = likePost(2)

    const newState = profileReducer(state, action)

    expect(newState.postsData[1].isLiked).toBe(true)
})