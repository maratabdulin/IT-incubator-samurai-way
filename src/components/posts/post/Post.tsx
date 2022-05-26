import React from "react";
import s from './styles.module.css'

type PostType = {
    message: string
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img
                className={s.item__image}
                alt='avatar'
                src='https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg'/>
            {props.message}
        </div>
    )
}

export default Post;
