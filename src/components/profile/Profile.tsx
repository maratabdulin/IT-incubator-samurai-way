import React from "react";
import s from './styles.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
