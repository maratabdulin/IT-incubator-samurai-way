import React from 'react';
import s from './styles.module.css';
import Profile from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {getUserProfile, UserProfileType} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: UserProfileType
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '24885';
        }
        this.props.getUserProfile(userId);
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

export default connect(mapStateToProps, {getUserProfile})(WithUrlProfileContainer);
