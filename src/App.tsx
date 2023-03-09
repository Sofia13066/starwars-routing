import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {defaultHero, StarWarsContext} from "./utils/constants";

const App = () => {

    const [hero, setHero] = useState(defaultHero);
    return (
        <div className="container-fluid">
            <StarWarsContext.Provider value={
                {
                    hero, setHero
                }
            }>
                <Header/>
                <Main/>
            </StarWarsContext.Provider>
            <Footer/>
        </div>
    );

}

export default App;
