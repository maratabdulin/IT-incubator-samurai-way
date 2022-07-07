import React, {ChangeEvent} from 'react';
import s from './style.module.css'
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";
import {ActionsTypes, DialogType, MessageType} from "../../redux/store";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    dispatch: (action: ActionsTypes) => void
    newMessageText: string
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages, newMessageText, dispatch}) => {
    let dialogsElements = dialogs.map((d: DialogType) => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = messages.map((m: MessageType) => <Message message={m.message} id={m.id}/>);

    const addMessage = () => {
        dispatch(addMessageAC(newMessageText))
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value;
        message && dispatch(updateNewMessageAC(message));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.addMessage}>
                    <div>
                        <textarea value={newMessageText} onChange={onMessageChange}/>
                    </div>
                    <button onClick={addMessage}>Add Post</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
