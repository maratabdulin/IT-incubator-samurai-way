import {ActionsTypes, MessagePageType, MessageType} from "./redux-store";
import {v1} from "uuid";

let initialState: MessagePageType = {
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
}

const dialogsReducer = (state: MessagePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state
    }
}

export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

export const addMessageAC = (newMessageText: string) =>
    ({type: "ADD-MESSAGE", newMessageText}) as const

export const updateNewMessageAC = (newMessage: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newMessage}) as const


export default dialogsReducer;
