import React from "react";
import Front from "../components/sections/Front";
import GridView from "../components/sections/GridView";

const AnimeSheets = props => {
    return <div className="anime-sheets-page">
            <main className="main-container">
                <GridView section="anime-sheets" view="sheets" filter="animePath" filterValue={props.animePath}/>
            </main>
        </div>
};

export default AnimeSheets;