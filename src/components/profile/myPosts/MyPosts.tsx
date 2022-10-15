import React from 'react';
import s from './styles.module.css';
import Post from "../post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {MyPostsPropsType} from "./MyPostsContainer";
import {NewPostFormRedux, NewPostPropsType} from './NewPostForm';

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements = props.posts
        .map((p: PostType) => <Post post={p.post} likesCount={p.likesCount} id={p.id} key={p.id}/>);

    const addPost = (values: NewPostPropsType) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <NewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
