import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


type NavbarType = {
    profile: string
    message: string
    news: string
    music: string
    setting: string
}

const Navbar = (props: NavbarType) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>{props.profile}</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>{props.message}</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>{props.news}</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>{props.music}</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>{props.setting}</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;