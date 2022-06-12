import React from "react";
import s from './styles.module.css'
import {PostType} from "../../../redux/state";

const Post:React.FC<PostType> = ({id, post, likesCount}) => {
    return (
        <div className={s.item} id={id}>
            <img
                className={s.item__image}
                alt='avatar'
                src='https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg'/>
            <span>{post}</span>
            <span>{likesCount}</span>
        </div>
    )
}

export default Post;
