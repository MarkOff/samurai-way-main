import React from 'react';
import s from './Music.module.css';
type MusicType = {
    music: string
}

const Music = (props: MusicType) => {
    return(
        <div>
            {props.music}
        </div>
    );
}

export default Music;