import React from "react";
import s from './styles.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>
    addPost: (post: string) => void
}

const Profile:React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;
