import React, { useContext, useEffect, useState } from 'react';
import Heroo from "./Heroo";
import {Hero} from "../utils/types";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import { useParams, useNavigate } from 'react-router-dom';
import { characters, navItems, StarWarsContext } from '../utils/constants';

const Home = () => {
    const {hero, setHero} = useContext(StarWarsContext);
    const navigate = useNavigate();
    let {heroId = ''} = useParams();
    const { hero: currentHero, setHero: changeHero } =
  useContext(StarWarsContext);

    useEffect(() => {
        if (!Object.keys(characters).includes(heroId)) {
            navigate(`/${navItems[0].route}/${currentHero}`);
            
    }else{
        changeHero(heroId);
    }
    }, [hero, setHero, navigate])
    
    return (
        <main className="clearfix">
            <Heroo/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;