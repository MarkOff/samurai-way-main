import React from "react";
import s from './Post.module.css';
import * as url from 'url';

type PostType = {
    message: string | number,
    likeCounts: number
    like: string
    avatar: string
    alt: string
}

const Post = (props: PostType) => {
    return (
        <div className='posts'>
            <div className={s.item}>
                <img src={props.avatar} alt={props.alt}/>
                {props.message}
                <div >
                    <span> {props.like} </span>
                    <span>{props.likeCounts}</span>
                </div>
            </div>
        </div>
    );
}
export default Post;
