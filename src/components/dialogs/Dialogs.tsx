import React from 'react';
import s from './style.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type DialogItemType = {
    name: string
    id: string
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
    id: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: v1(), name: 'Marat'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Valery'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Natasha'},
    ]

    let messageData = [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your date?'},
        {id: v1(), message: 'Yo!'},
        {id: v1(), message: 'Hello!'},
        {id: v1(), message: 'How are you?'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[0].id}/>
                <Message message={messageData[2].message} id={messageData[0].id}/>
                <Message message={messageData[3].message} id={messageData[0].id}/>
                <Message message={messageData[4].message} id={messageData[0].id}/>
            </div>
        </div>
    );
};

export default Dialogs;
