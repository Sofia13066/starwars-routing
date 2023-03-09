import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/constants";
import styles from '../css/farGalaxy.module.css';

const FarGalaxy = () => {
    const [opening_crawl, setOpeningCrawl] = useState('Loading...');

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setOpeningCrawl(opening_crawl)
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
    }, [])


    return (
        <p className={styles.farGalaxy}>{opening_crawl}</p>
    );

}

export default FarGalaxy;