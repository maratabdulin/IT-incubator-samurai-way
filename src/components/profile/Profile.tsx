import React from "react";
import s from './styles.module.css';
import MyPosts from "../posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.image}
                     src="https://cdn.statically.io/img/codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg"
                     alt="image"
                />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
