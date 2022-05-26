import React from "react";
import './styles.css';
import MyPosts from "../posts/MyPosts";

type ProfileType = {
    className: string;
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={props.className}>
            <div>
                <img src="https://cdn.statically.io/img/codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg?f=webp&w=1440" alt="image"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
