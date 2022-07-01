import {ActionsTypes, MessagePageType, MessageType} from "./state";
import {v1} from "uuid";

const dialogsReducer = (state: MessagePageType, action: ActionsTypes) => {

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
