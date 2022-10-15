import React from 'react';
import s from './style.module.css'
import Message from './message/Message';
import DialogItem from './dialogItem/DialogItem';
import {DialogType, MessageType} from '../../redux/dialogs-reducer';
import {DialogsPropsType} from './DialogsContainer';
import {NewMessageFormRedux, NewMessagePropsType} from './message/NewMessageForm';

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d: DialogType) =>
        <DialogItem name={d.name} id={d.id} key={d.id}/>);

    let messageElements = props.dialogsPage.messages.map((m: MessageType) =>
        <Message message={m.message} id={m.id} key={m.id}/>);

    const addNewMessage = (values: NewMessagePropsType ) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <NewMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;
