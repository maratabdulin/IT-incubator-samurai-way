import React from 'react';
import s from './style.module.css'
import {MessageType} from "../../../redux/dialogs-reducer";

const Message:React.FC<MessageType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export default Message;
