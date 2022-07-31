import React from "react";
import s from './styles.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {UserProfileType} from '../../redux/profile-reducer';

type ProfileStateType = {
    profile: UserProfileType
}

const Profile = (props: ProfileStateType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
