import React from 'react';
import s from './Profileinfo.module.css'

type ProfileInfoType = {
    avatarWall: string
    alt: string
}

const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>

            <div className={s.settingAvatar}>
                <img
                    src={props.avatarWall}
                    alt={props.alt}/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
}
export default ProfileInfo;

