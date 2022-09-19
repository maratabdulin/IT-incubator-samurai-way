import React from 'react';
import s from "../styles.module.css";
import {UserProfileType} from '../../../redux/profile-reducer';
import ProfileStatus from './ProfileStatus';

type ProfileInfoStateType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoStateType) => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus
                    status={props.status} updateStatus={props.updateStatus}/>
                <h4>{props.profile.fullName}</h4>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
