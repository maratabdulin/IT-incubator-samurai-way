import React from 'react';
import s from './styles.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                new post
                <Post message="hi how are you?"/>
                <Post message="It' s my first post"/>
            </div>
        </div>
    );
};

export default MyPosts;
