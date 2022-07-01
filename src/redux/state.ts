import {v1} from "uuid";

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

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostAC>
type AddMessageActionType = ReturnType<typeof addMessageAC>
type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | AddMessageActionType | UpdateNewMessageActionType

export const addPostAC = (newPostText: string) =>
    ({type: "ADD-POST", newPostText}) as const

export const updateNewPostAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText}) as const

export const addMessageAC = (newMessageText: string) =>
    ({type: "ADD-MESSAGE", newMessageText}) as const

export const updateNewMessageAC = (newMessage: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newMessage}) as const

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
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: v1(),
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessageType = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber();
        }
    }
}

export default store;
