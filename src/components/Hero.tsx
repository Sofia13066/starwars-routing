import React, {useContext} from 'react';
import main from "../Images/main.jpg";
import {characters, StarWarsContext} from "../utils/constants";

const Hero = () => {
    const {hero} = useContext(StarWarsContext);
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={characters[hero].img} alt={characters[hero].name}/>
        </section>
    );
};

export default Hero;