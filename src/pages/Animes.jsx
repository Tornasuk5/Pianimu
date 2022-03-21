import React from "react";
import Front from "../components/sections/Front";
import GridView from "../components/sections/GridView";
import Header from '../components/sections/Header';

const Animes = props => {
    return <div className="animes-page">
            <main className="main-container">
                <Front pagKey = "animes" page="Animes"/>
                <GridView section="animes" view="animes" filter=""/>
            </main>
        </div>
};

export default Animes;