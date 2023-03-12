import React, {useContext, useEffect} from 'react';
import {defaultHero, friends, navItems, StarWarsContext, starWarsInfo} from "../utils/constants";
import styles from '../css/farGalaxy.module.css';
import {NavigateFunction, useNavigate, useParams} from "react-router-dom";
import mainHeroAndParams from '../hof/mainHeroAndParams';

interface Props4StarWars{
    heroId: string;
    changeHero: (hero: string) => void;
    navigate: NavigateFunction;
}

const StarWars: React.FC<Props4StarWars> = ({heroId, changeHero, navigate}) => {

    useEffect(() => {
        if (!friends.includes(heroId)) {
            navigate(`/${navItems[2].route}/${defaultHero}`);
        } else {
            changeHero(heroId);
        }
    }, [heroId]);
    return (
        <div className={styles.farGalaxy}>
            <p>{starWarsInfo}</p>
        </div>
    );
};

export default mainHeroAndParams(StarWars);