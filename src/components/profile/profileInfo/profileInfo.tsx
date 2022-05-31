import React from 'react';
import s from "../styles.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.image}
                     src="https://cdn.statically.io/img/codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg"
                     alt="image"
                />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
