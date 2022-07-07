import React from "react";
import s from './styles.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import {StoreType} from "../../redux/redux-store";
import MyPostsContainer from "./myPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;
