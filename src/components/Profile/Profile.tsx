import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './Profileinfo/Profileinfo';


const Profile = () => {
    return (
        <div>

            <ProfileInfo avatarWall={'https://img.freepik.com/free-photo/beautiful-shot-of-sea-with-a-mountain-in-the-distance-and-a-clear-sky_181624-2248.jpg?w=2000'} alt={'this is avatar wall'}/>
            <MyPosts nameWall={'My posts'} buttonName={'Add posts'} text={''}/>
        </div>
    );
}
export default Profile;

