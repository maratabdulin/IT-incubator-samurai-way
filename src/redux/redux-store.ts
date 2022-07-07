import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, UpdateNewPostTextType} from "./profile-reducer";
import dialogsReducer, {AddMessageActionType, UpdateNewMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type PostType = {
    post: string
    likesCount: number
    id: string
};
export type MessageType = {
    message: string
    id: string
}
export type DialogType = {
    name: string
    id: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessagePageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagePageType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | AddMessageActionType | UpdateNewMessageActionType

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
})

let store: StoreType = createStore(reducers);

export default store;
