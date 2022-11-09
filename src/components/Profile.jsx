import React from "react";
import i from './Profile.module.css';

const Profile = () => {
    return (
        <div className={i.content}>
            <div>
                <img
                    src='https://img.freepik.com/free-photo/beautiful-shot-of-sea-with-a-mountain-in-the-distance-and-a-clear-sky_181624-2248.jpg?w=2000'
                    width={1200} height={200} alt='this avatar profile'/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>new post</div>
            </div>
            <div className='posts'>
                <div className={i.item}>
                    post 1
                </div>
                <div className={i.item}>
                    post 2
                </div>
            </div>
        </div>
    );
}
export default Profile;