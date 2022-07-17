import React from 'react';
import s from './styles.module.css';
import Post from "../post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {MyPostsPropsType} from "./MyPostsContainer";

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements = props.posts
        .map((p: PostType) => <Post post={p.post} likesCount={p.likesCount} id={p.id} key={p.id}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        text && props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
