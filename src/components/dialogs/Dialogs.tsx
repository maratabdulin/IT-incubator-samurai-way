import React from 'react';
import s from './style.module.css'
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs:React.FC<DialogsPropsType> = ({dialogs, messages}) => {
    let dialogsElements = dialogs.map((d: DialogType) => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = messages.map((m: MessageType) => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;
