import React from "react";
import s from './styles.module.css';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src='https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg' alt='logo'/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;
