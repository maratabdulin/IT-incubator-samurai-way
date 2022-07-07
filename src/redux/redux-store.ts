import {combineReducers, createStore} from "redux";
import {StoreType} from "./store";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
})

let store: StoreType = createStore(reducers);

export default store;
