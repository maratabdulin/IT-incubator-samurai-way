import React from "react";
import './styles.module.css';

type NavbarType = {
    className: string;
}

const Navbar: React.VFC<NavbarType> = (props) => {
    return (
        <nav className={props.className}>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
            </ul>
        </nav>
    )
}

export default Navbar;
