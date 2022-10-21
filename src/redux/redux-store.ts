import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {
    AddPostActionType, SetStatusActionType,
    SetUserProfileActionType,
} from './profile-reducer';
import dialogsReducer, {AddMessageActionType} from './dialogs-reducer';
import usersReducer, {
    FollowActionType,
    SetUsersActionType,
    SetUsersCurrentPageType,
    SetUsersTotalCountType,
    ToggleIsFetchingType, ToggleIsFollowingProgressType,
    UnfollowActionType
} from './users-reducer';
import sidebarReducer from './sidebar-reducer';
import authReducer, {SetUserDataType} from './auth-reducer';
import appReducer, {InitializedSuccessType} from './app-reducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form'

export type ActionsTypes =
    AddPostActionType |
    AddMessageActionType |
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType |
    SetUsersCurrentPageType |
    SetUsersTotalCountType |
    ToggleIsFetchingType |
    SetUserProfileActionType |
    SetUserDataType |
    ToggleIsFollowingProgressType |
    SetStatusActionType |
    InitializedSuccessType

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes | FormAction>

// @ts-ignore
window.store = store

export default store;
