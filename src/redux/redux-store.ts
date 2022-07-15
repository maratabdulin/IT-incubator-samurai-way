import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, UpdateNewPostTextType} from "./profile-reducer";
import dialogsReducer, {AddMessageActionType, UpdateNewMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: MessagePageType
// }
// export type StoreType = {
//     _state: StateType
//     _callSubscriber: () => void
//     getState: () => StateType
//     subscribe: (callback: () => void) => void
//     dispatch: (action: ActionsTypes) => void
// }

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | AddMessageActionType | UpdateNewMessageActionType

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
})




export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof store.getState>;

export default store;
