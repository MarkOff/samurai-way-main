import React from "react";
import s from './Header.module.css';

type HeaderType = {
    logo: string
    alt: string
}

const Header = (props:HeaderType) => {
    return (
        <header className={s.header}>
            <img src={props.logo} alt={props.alt}/>
        </header>
    );
}
export default Header;