import React from "react";
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={myPosts.post}>
                <Post message = {'Hi, how are you?'} likeCounts={15}/>
                <Post message = {"It's my first(1) post"} likeCounts={20}/>
            </div>
        </div>
    );
}
export default MyPosts;