import React from 'react';
import {StoreType} from "../../redux/redux-store";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    const state = props.store.getState();

    const addMessage = (newMessageText: string) => {
        props.store.dispatch(addMessageAC(newMessageText))
    }

    let updateNewMessageText = (message: string) => {
        message && props.store.dispatch(updateNewMessageAC(message));
    }

    return <Dialogs
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
        newMessageText={state.dialogsPage.newMessageText}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}/>;
};

export default DialogsContainer;
