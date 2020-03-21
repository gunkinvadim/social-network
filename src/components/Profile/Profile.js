import React from 'react'
import {  } from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ profileData }) => {
    return (
        <div>
            <ProfileInfo
                profileData={profileData}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile