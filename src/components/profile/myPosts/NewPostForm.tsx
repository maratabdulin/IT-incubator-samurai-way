import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, required} from '../../../utils/validators/validators';
import {Textarea} from '../../commons/formsControls/FormsControls';

export type NewPostPropsType = {
    newPostBody: string
}

const postMaxLength = maxLength(10);

const NewPostForm: React.FC<InjectedFormProps<NewPostPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newPostBody"
                    component={Textarea}
                    placeholder="Enter new post"
                    validate={[required, postMaxLength]}
                />
            </div>
            <button>Add Post</button>
        </form>
    );
};

export const NewPostFormRedux = reduxForm<NewPostPropsType>({form: 'profileAddPostForm'})(NewPostForm);
