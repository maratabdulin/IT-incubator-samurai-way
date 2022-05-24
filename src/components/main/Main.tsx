import React from "react";

type MainType = {
    className: string;
}


const Main = (props: MainType) => {
    return (
        <div className={props.className}>
            <div>
                <img src="https://cdn.statically.io/img/codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg?f=webp&w=1440" alt="image"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    new post
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Main;
