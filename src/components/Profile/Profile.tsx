import React from "react";
import profile from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={profile.content}>
            <div>
                <img
                    src='https://img.freepik.com/free-photo/beautiful-shot-of-sea-with-a-mountain-in-the-distance-and-a-clear-sky_181624-2248.jpg?w=2000'
                    width={1200} height={200} alt='this avatar profile'/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    );
}
export default Profile;