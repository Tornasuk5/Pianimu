import React from "react";
import Front from "../components/sections/Front";
import GridView from "../components/sections/GridView";

const Animes = props => {
    return <main className="animes-page">
                <Front pagKey = "animes" title="Animes"/>
                <GridView section="animes" view="animes" filter=""/>
            </main>
};

export default Animes;