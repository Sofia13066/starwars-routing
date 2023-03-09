import React from 'react';
import style from '../css/bottom-around.module.css';

interface Props {
    friend: string,
    pos: number
}

const Friend = ({friend, pos}: Props) => {
    let styles = 'col-4 p-1 ';
    if (pos === 7) {
        styles += style['bottom-left'];
    }
    if (pos === 9) {
        styles  += style['bottom-right'];
    }
    return (
        <img className={styles} src={friend} alt="friend"/>
    );
};

export default Friend;