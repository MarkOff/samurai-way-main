import React from 'react';
import s from './Settings.module.css';

type SettingsType = {
    settings: string
}

const Settings = (props: SettingsType) => {
    return (
        <div>
            {props.settings}
        </div>
    );
}

export default Settings;