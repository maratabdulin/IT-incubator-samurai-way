import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

let posts: Array<PostType> = [
    {id: v1(), post: 'hi how are you?', likesCount: 0},
    {id: v1(), post: 'It\' s my first post', likesCount: 23},
];
let messages: Array<MessageType> = [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'How is your date?'},
    {id: v1(), message: 'Yo!'},
    {id: v1(), message: 'Hello!'},
    {id: v1(), message: 'How are you?'},
];
let dialogs: Array<DialogType> = [
    {id: v1(), name: 'Marat'},
    {id: v1(), name: 'Dima'},
    {id: v1(), name: 'Victor'},
    {id: v1(), name: 'Valery'},
    {id: v1(), name: 'Sveta'},
    {id: v1(), name: 'Natasha'},
];

ReactDOM.render(<App
    messages={messages}
    dialogs={dialogs}
    posts={posts}
/>, document.getElementById('root'));
