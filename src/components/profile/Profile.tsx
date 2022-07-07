import React from "react";
import s from './styles.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;
