import React from 'react';
import s from './styles.module.css';
import Post from "../post/Post";

const MyPosts = (props: any) => {
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
                <Post message="hi how are you?" likesCount={0}/>
                <Post message="It' s my first post" likesCount={23}/>
            </div>
        </div>
    );
};

export default MyPosts;
