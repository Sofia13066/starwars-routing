import React, { useContext } from 'react';
import {NavigationItem} from "../utils/types";
import {Link} from "react-router-dom";
import { StarWarsContext } from '../utils/constants';

interface Props {
    item: NavigationItem
}
const NavItem = ({item}: Props) => {
    const {hero} = useContext(StarWarsContext);
    return (
        <li>
            <Link className="nav-item btn btn-danger mx-1" to={item.route}>{item.title}</Link>
        </li>
    );
};

export default NavItem;