import React, {useContext} from 'react';
import {StarWarsContext} from "../utils/constants";
import {useNavigate, useParams} from "react-router-dom";

function mainHeroAndParams (Component) {
    return function WrappedComp (props) {
        const {heroId = ''} = useParams();
        const {setHero: changeHero} = useContext(StarWarsContext);
        const navigate = useNavigate();
        
        return <Component 
            {...props}
            heroId={heroId}
            changeHero={changeHero}
            navigate={navigate}/>;
    }
}

export default mainHeroAndParams;