import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {NavigateFunction, useNavigate, useParams} from "react-router-dom";
import {defaultHero, friends, navItems, StarWarsContext} from "../utils/constants";
import mainHeroAndParams from '../hof/mainHeroAndParams';

interface Props4Home{
    heroId: string;
    changeHero: (hero: string) => void;
    navigate: NavigateFunction;
}

const Home: React.FC<Props4Home> = ({heroId, changeHero, navigate}) => {
    


    useEffect(() => {
        if (!friends.includes(heroId)) {
            navigate(`/${navItems[0].route}/${defaultHero}`);
        } else {
            changeHero(heroId);
        }
    }, [heroId]);
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default mainHeroAndParams(Home);