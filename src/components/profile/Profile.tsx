import React from "react";
import s from './styles.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>
}

const Profile:React.FC<ProfilePropsType> = ({posts}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;
