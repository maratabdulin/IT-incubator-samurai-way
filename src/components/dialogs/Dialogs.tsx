import React from 'react';
import s from './style.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message:React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Marat' id={1}/>
                <DialogItem name='Dima' id={2}/>
                <DialogItem name='Victor' id={3}/>
                <DialogItem name='Valery' id={4}/>
                <DialogItem name='Sveta' id={5}/>
                <DialogItem name='Natasha' id={6}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How is your date?'/>
                <Message message='Yo!'/>
                <Message message='Hello!'/>
                <Message message='How are you?'/>
            </div>
        </div>
    );
};

export default Dialogs;
