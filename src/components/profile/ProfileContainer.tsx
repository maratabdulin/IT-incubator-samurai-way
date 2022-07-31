import React from 'react';
import s from './styles.module.css';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile, UserProfileType} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: UserProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export let WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlProfileContainer);
