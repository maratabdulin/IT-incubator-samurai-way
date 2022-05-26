import React from "react";
import './styles.module.css';

type HeaderType = {
    className: string;
}

const Header: React.FC<HeaderType> = (props) => {
    return (
        <header className={props.className}>
            <img src='https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg' alt='logo'/>
        </header>
    )
}

export default Header;
