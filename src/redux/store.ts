import {v1} from "uuid";
import profileReducer, {AddPostActionType, UpdateNewPostTextType} from "./profile-reducer";
import dialogsReducer, {AddMessageActionType, UpdateNewMessageActionType} from "./dialogs-reducer";

type PostType = {
    post: string
    likesCount: number
    id: string
};
type MessageType = {
    message: string
    id: string
}
type DialogType = {
    name: string
    id: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type MessagePageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagePageType
}
type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
type ActionsTypes = AddPostActionType | UpdateNewPostTextType | AddMessageActionType | UpdateNewMessageActionType

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), post: 'hi how are you?', likesCount: 0},
                {id: v1(), post: 'It\' s my first post', likesCount: 23},
            ],
            newPostText: 'it-MassTransit',
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Marat'},
                {id: v1(), name: 'Dima'},
                {id: v1(), name: 'Victor'},
                {id: v1(), name: 'Valery'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Natasha'},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your date?'},
                {id: v1(), message: 'Yo!'},
                {id: v1(), message: 'Hello!'},
                {id: v1(), message: 'How are you?'},
            ],
            newMessageText: 'Hi, how are you?'
        },
    },
    _callSubscriber() {
        console.log('state is changed');
    },

    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}

export default store;
