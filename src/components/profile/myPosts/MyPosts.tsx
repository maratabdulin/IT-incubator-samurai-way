import React from 'react';
import s from './styles.module.css';
import Post from "../post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts}) => {
    let postsElements = posts
        .map((p: PostType) => <Post post={p.post} likesCount={p.likesCount} id={p.id}/>);

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
