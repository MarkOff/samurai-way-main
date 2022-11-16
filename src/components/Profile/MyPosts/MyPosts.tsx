import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    nameWall: string
    buttonName: string
    text: string
}

const MyPosts = (props: MyPostsType) => {
    return (
        <div className={s.postsBlock}>
            <h3>{props.nameWall}</h3>
            <div>
                <div><textarea>{props.text}</textarea></div>
                <div>
                    <button>{props.buttonName}</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post avatar={'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'} alt={'this is avatar'}
                      message={'Hi, how are you?'} like={'like'} likeCounts={15}/>
                <Post avatar={'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'} alt={'this is avatar'}
                      message={'It\'s my first(1) post'} like={'like'} likeCounts={20}/>
            </div>
        </div>
    );
}
export default MyPosts;