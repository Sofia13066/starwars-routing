import React from 'react';
import {navItems} from "../utils/constants";
import NavItem from "./NavItem";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-1 ms-5">
            <ul className="nav">
                {navItems.map(i => <NavItem key={i.route} item={i}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;