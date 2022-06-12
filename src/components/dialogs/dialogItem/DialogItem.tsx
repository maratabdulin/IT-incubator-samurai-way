import React from 'react';
import s from './style.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";

const DialogItem:React.FC<DialogType> = ({name, id}) => {
    let path = `/dialogs/${id}`;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;
