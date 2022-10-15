import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, required} from '../../../utils/validators/validators';
import {Textarea} from '../../commons/formsControls/FormsControls';

export type NewMessagePropsType = {
    newMessageBody: string
}

const messageMaxLength = maxLength(30)

const NewMessageForm: React.FC<InjectedFormProps<NewMessagePropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newMessageBody"
                    component={Textarea}
                    placeholder="Enter new message"
                    validate={[required, messageMaxLength]}
                />
            </div>
            <button>Add Post</button>
        </form>
    );
};

export const NewMessageFormRedux = reduxForm<NewMessagePropsType>({form: 'dialogAddMessageForm'})(NewMessageForm);

