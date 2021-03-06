import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {AddMessageActionType, UpdateNewMessageActionType} from "./dialogs-reducer";
import usersReducer, {FollowActionType, SetUsersActionType, UnfollowActionType} from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";

export type ActionsTypes =
    AddPostActionType |
    UpdateNewPostTextActionType |
    AddMessageActionType |
    UpdateNewMessageActionType |
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer,
})


export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof store.getState>;

export default store;
