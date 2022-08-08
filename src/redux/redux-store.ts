import {combineReducers, createStore} from 'redux';
import profileReducer, {
    AddPostActionType,
    SetUserProfileActionType,
    UpdateNewPostTextActionType
} from './profile-reducer';
import dialogsReducer, {AddMessageActionType, UpdateNewMessageActionType} from './dialogs-reducer';
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

export type ActionsTypes =
    AddPostActionType |
    UpdateNewPostTextActionType |
    AddMessageActionType |
    UpdateNewMessageActionType |
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType |
    SetUsersCurrentPageType |
    SetUsersTotalCountType |
    ToggleIsFetchingType |
    SetUserProfileActionType |
    SetUserDataType |
    ToggleIsFollowingProgressType

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer,
    auth: authReducer,
})

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof store.getState>;

// @ts-ignore
window.store = store

export default store;
