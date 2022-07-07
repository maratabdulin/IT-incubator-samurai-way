import React from 'react';
import {StoreType} from "../../../redux/redux-store";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText))
    }

    let onPostChange = (text: string) => {
        text && props.store.dispatch(updateNewPostAC(text));
    }

    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
        />);
};

export default MyPostsContainer;
