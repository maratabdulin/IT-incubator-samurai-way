import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

export type MapStateToPropsType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header
            userId={this.props.userId}
            email={this.props.email}
            login={this.props.login}
            isAuth={this.props.isAuth}
        />
    }
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    userId: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
