import React from "react";
import s from './styles.module.css';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul>
                <li>
                    <a href='/profile'>Profile</a>
                </li>
                <li>
                    <a href='/dialogs'>Dialogs</a>
                </li>
                <li>
                    <a href='/news'>News</a>
                </li>
                <li>
                    <a href='/setting'>Settings</a>
                </li>
                <li>
                    <a href='/music'>Music</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
