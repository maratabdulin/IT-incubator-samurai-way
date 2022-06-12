import React from 'react';
import s from './style.module.css'
import {v1} from "uuid";
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";

const Dialogs = () => {
    let dialogs = [
        {id: v1(), name: 'Marat'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Valery'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Natasha'},
    ];

    let dialogsElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messages = [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your date?'},
        {id: v1(), message: 'Yo!'},
        {id: v1(), message: 'Hello!'},
        {id: v1(), message: 'How are you?'},
    ];

    let messageElements = messages
        .map((m) => <Message message={m.message} id={m.id}/>);

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
