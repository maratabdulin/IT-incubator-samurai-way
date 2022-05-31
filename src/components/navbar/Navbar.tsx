import React from "react";
import s from './styles.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbarList}>
                <li>
                    <NavLink className={s.item} to='/profile' activeClassName={s.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink className={s.item} to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
                </li>
                <li>
                    <NavLink className={s.item} to='/news' activeClassName={s.active}>News</NavLink>
                </li>
                <li>
                    <NavLink className={s.item} to='/setting' activeClassName={s.active}>Settings</NavLink>
                </li>
                <li>
                    <NavLink className={s.item} to='/music' activeClassName={s.active}>Music</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
