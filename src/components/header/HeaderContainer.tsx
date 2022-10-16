import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

export type MapStateToPropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    logout: () => void
    getAuthUserData: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header
            userId={this.props.userId}
            email={this.props.email}
            login={this.props.login}
            isAuth={this.props.isAuth}
            logout={this.props.logout}
        />
    }
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    userId: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
