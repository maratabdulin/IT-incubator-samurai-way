import React, {ChangeEvent} from 'react';
import s from './style.module.css'
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d: DialogType) => <DialogItem name={d.name} id={d.id} key={d.id}/>);

    let messageElements = props.dialogsPage.messages.map((m: MessageType) => <Message message={m.message} id={m.id} key={m.id}/>);

    const addMessage = () => props.addMessage(props.dialogsPage.newMessageText);

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value;
        props.updateNewMessageText(message)
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
                        <textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
                    </div>
                    <button onClick={addMessage}>Add Post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
