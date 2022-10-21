import {ActionsTypes, AppThunk} from './redux-store';
import {getAuthUserData} from './auth-reducer';

type InitialedType = {
    initialized: boolean
}

export type InitializedSuccessType = ReturnType<typeof initializedSuccess>

let initialState: InitialedType = {
    initialized: false,
};

const appReducer = (state: InitialedType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => (
    {
        type: 'SET-INITIALIZED',
    }) as const

export const initializeApp = (): AppThunk => dispatch => {
    let promise: any = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })



}

export default appReducer;
