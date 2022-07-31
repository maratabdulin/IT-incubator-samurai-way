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
                <img src={props.profile.photos.large} alt=""/>
                <h4>{props.profile.fullName}</h4>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
