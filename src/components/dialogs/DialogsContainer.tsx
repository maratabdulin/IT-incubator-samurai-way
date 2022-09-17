import {addMessageAC, MessagePageType, updateNewMessageAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import React from 'react';

type mapStateToPropsType = {
    dialogsPage: MessagePageType
}
type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
    updateNewMessageText: (message: string) => void
}

export type DialogsPropsType = mapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        },
        updateNewMessageText: (message: string) => {
            dispatch(updateNewMessageAC(message))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
