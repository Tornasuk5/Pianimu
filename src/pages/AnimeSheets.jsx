import React from "react";
import Front from "../components/sections/Front";
import GridView from "../components/sections/GridView";

const AnimeSheets = props => {
    return <main className="anime-sheets-page">
                <Front pagKey="sheets" title="" animePath={props.animePath}/>
                <GridView section="anime-sheets" view="sheets" filter="animePath" filterValue={props.animePath}/>
            </main>
};

export default AnimeSheets;