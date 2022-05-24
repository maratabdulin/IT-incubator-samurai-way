import React from "react";

type SidebarType = {
    className: string;
}


const Sidebar = (props: SidebarType) => {
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

export default Sidebar;
