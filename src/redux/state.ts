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
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagePageType
}
type SubscribeType = (state: StateType) => void

let rerenderEntireTree = (state: StateType) => {
    console.log('state is changed');
}

const state: StateType = {
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
    },
}

export const addPost = () => {
    let newPost: PostType = {
        id: v1(),
        post: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer: SubscribeType) => {
    rerenderEntireTree = observer;
}

export default state;
