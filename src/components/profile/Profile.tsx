import React from "react";
import s from './styles.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {UserProfileType} from '../../redux/profile-reducer';

type ProfileStateType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfileStateType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
