import React from 'react';
import s from './styles.module.css';
import Post from "../post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements = props.posts
        .map((p: PostType) => <Post post={p.post} likesCount={p.likesCount} id={p.id}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch({type: "ADD-POST", newPostText: props.newPostText})
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        text && props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});;
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
