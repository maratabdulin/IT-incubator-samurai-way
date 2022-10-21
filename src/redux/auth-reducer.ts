import {ActionsTypes, AppThunk} from './redux-store';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export type SetUserDataType = ReturnType<typeof setAuthUserData>

let initialState: AuthType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
};

const authReducer = (state: AuthType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'SET-USERS-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => (
    {
        type: 'SET-USERS-DATA',
        data: {id, email, login, isAuth}
    }) as const

export const getAuthUserData = (): AppThunk =>
    dispatch => {
        return authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
    }

export const login = (email: string, password: string, rememberMe: boolean): AppThunk =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'

                dispatch(stopSubmit('Login', {_error: message}));
            }
        });
    }

export const logout = (): AppThunk => dispatch => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(0, '', '', false))
        }
    });
}

export default authReducer;
