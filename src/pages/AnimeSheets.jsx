import React from "react";
import GridView from "components/GridView";

const AnimeSheets = props => {
    
    return <main className="anime-sheets-page">
                <GridView section="anime-sheets" title="" animePath={props.animePath} searchType="Sheets" view="sheets" filter="animePath" filterValue={props.animePath}/>
            </main>
};

export default AnimeSheets;