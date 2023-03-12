import React from 'react';
import style from '../css/bottom-around.module.css';
import {characters, navItems} from "../utils/constants";
import {useNavigate} from "react-router-dom";

interface Props {
    friend: string,
    pos: number
}

const Friend = ({friend, pos}: Props) => {
    const navigate = useNavigate();
    let styles = 'col-4 p-1 ';
    if (pos === 7) {
        styles += style['bottom-left'];
    }
    if (pos === 9) {
        styles += style['bottom-right'];
    }
    return (
        <img onClick={() => navigate(`/${navItems[0].route}/${friend}`)} className={styles} src={characters[friend].img} alt="friend"/>
    );
};

export default Friend;