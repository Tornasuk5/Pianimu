import React from "react";
import Front from "../components/sections/Front";
import GridView from "../components/sections/GridView";

const Animes = props => {
    return <div className="animes-page">
            <main className="main-container">
                <Front pagKey = "animes" title="Animes"/>
                <GridView section="animes" view="animes" filter=""/>
            </main>
        </div>
};

export default Animes;