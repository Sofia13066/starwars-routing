import React, {useContext, useEffect, useState} from 'react';
import styles from '../css/aboutMe.module.css';
import {base_url, characters, defaultHero, navItems, period_month, StarWarsContext} from "../utils/constants";
import {Hero} from "../utils/types";
import {useNavigate, useParams} from "react-router-dom";

const AboutMe = () => {

    const [hero, setHero] = useState<Hero>();
    let {heroId = ''} = useParams();
    const navigate = useNavigate();
    const { hero: currentHero, setHero: changeHero } =
  useContext(StarWarsContext);

    useEffect(() => {
        if (!Object.keys(characters).includes(heroId)) {
            navigate(`/${navItems[1].route}/${currentHero}`);
        } else {
            changeHero(heroId);
            const hero = JSON.parse(localStorage.getItem(heroId)!);
            if (hero && ((Date.now() - hero.time) < period_month)) {
                setHero(hero.payload);
            } else {
                fetch(characters[heroId].url)
                    .then(response => response.json())
                    .then(data => {
                        const hero = {
                            "name": data.name,
                            "height": data.height,
                            "mass": data.mass,
                            "hair_color": data.hair_color,
                            "skin_color": data.skin_color,
                            "eye_color": data.eye_color,
                            "birth_year": data.birth_year,
                            "gender": data.gender
                        };
                        setHero(hero)
                        const info = {
                            payload: hero,
                            time: Date.now()
                        }
                        localStorage.setItem(heroId, JSON.stringify(info));
                    });
            }

        }

    }, [heroId, changeHero, navigate, currentHero])

    return (
        <div>
            {hero &&
                <div className={`farGalaxy ${styles.hero_box}`}>
                    <p><span className={styles.hero_titles}>name:</span> {hero.name}</p>
                    <p><span className={styles.hero_titles}>height:</span> {hero.height}</p>
                    <p><span className={styles.hero_titles}>birth year:</span> {hero.birth_year}</p>
                    <p><span className={styles.hero_titles}>gender:</span> {hero.gender}</p>
                    <p><span className={styles.hero_titles}>mass:</span> {hero.mass}</p>
                    <p><span className={styles.hero_titles}>hair color:</span> {hero.hair_color}</p>
                    <p><span className={styles.hero_titles}>skin color:</span> {hero.skin_color}</p>
                    <p><span className={styles.hero_titles}>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </div>
    )
}

export default AboutMe