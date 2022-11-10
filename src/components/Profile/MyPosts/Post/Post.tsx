import React from "react";
import post from './Post.module.css'

type PostType = {
    message: string | number,
    likeCounts: number
}

const Post = (props: PostType) => {
    return (
        <div className='posts'>
            <div className={post.item}>
                <img src='https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg' alt='main avatar'/>
                {props.message}
                <div >
                    <span>Like </span>
                    <span>{props.likeCounts}</span>
                </div>
            </div>
        </div>
    );
}
export default Post;