import React from 'react'
import MyPostsContainer from './MyPosts/PostsContainer'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'

const Profile = ({ isMyProfile, editMode }) => {
    return (
        <div>
            <ProfileInfoContainer />
            {/* {isMyProfile && !editMode && <hr/>}
            {isMyProfile && !editMode && <MyPostsContainer />} */}
        </div>
    )
}

export default Profile