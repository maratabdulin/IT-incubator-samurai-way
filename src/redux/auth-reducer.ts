import {ActionsTypes} from './redux-store';
import usersReducer from './users-reducer';

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
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => (
    {
        type: 'SET-USERS-DATA',
        data: {id, email, login}
    }) as const

export default authReducer;
