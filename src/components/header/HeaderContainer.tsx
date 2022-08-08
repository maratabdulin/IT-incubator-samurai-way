import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

export type MapStateToPropsType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
