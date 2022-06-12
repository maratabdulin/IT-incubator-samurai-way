import React from 'react';
import s from './styles.module.css';
import Post from "../post/Post";
import {v1} from "uuid";

const MyPosts = (props: any) => {

    let posts = [
        {id: v1(), post: 'hi how are you?', likesCount: 0},
        {id: v1(), post: 'It\' s my first post', likesCount: 23},
    ]

    let postsElements = posts
        .map((p) => <Post post={p.post} likesCount={p.likesCount} key={p.id}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
