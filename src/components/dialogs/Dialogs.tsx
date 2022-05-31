import React from 'react';
import s from './style.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Marat</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Valery</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Natasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How is your date?</div>
                <div className={s.message}>Yo!</div>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>

            </div>
        </div>
    );
};

export default Dialogs;
