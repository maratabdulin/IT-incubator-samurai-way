import {ActionsTypes, AppThunk} from './redux-store';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type SetUserDataType = ReturnType<typeof setAuthUserData>

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
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

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    {
        type: 'SET-USERS-DATA',
        data: {id, email, login, isAuth}
    }) as const

export const getAuthUserData = (): AppThunk =>
    dispatch => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
    }

export const login = (email: string, password: string, rememberMe: boolean): AppThunk =>
    (dispatch)=> {
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
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
}

export default authReducer;
