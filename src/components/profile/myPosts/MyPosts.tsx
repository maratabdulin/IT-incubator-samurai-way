import React from 'react';
import s from './styles.module.css';
import Post from "../post/Post";
import {v1} from "uuid";

const MyPosts = (props: any) => {

    let postsData = [
        {id: v1(), post: 'hi how are you?', likesCount: 0},
        {id: v1(), post: 'It\' s my first post', likesCount: 23},
    ]

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
                <Post post={postsData[0].post} likesCount={postsData[0].likesCount} key={postsData[0].id}/>
                <Post post={postsData[1].post} likesCount={postsData[1].likesCount} key={postsData[1].id}/>
            </div>
        </div>
    );
};

export default MyPosts;
