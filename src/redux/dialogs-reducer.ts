import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";

export type MessageType = {
    message: string
    id: string
}
export type DialogType = {
    name: string
    id: string
}
export type MessagePageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

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

const dialogsReducer = (state: MessagePageType = initialState, action: ActionsTypes): MessagePageType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            return  {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: v1(), message: state.newMessageText}]
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newMessage};
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
