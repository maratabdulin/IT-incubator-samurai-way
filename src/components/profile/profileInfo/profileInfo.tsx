import React from 'react';
import s from "../styles.module.css";
import {UserProfileType} from '../../../redux/profile-reducer';

type ProfileInfoStateType = {
    profile: UserProfileType
}

const ProfileInfo = (props: ProfileInfoStateType) => {
    return (
        <div>
            <div>
                <img className={s.image}
                     src="https://cdn.statically.io/img/codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg"
                     alt="image"
                />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt=""/>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
