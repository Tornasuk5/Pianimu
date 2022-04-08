import React from "react";
import Front from "components/Front";
import GridView from "components/GridView";

const AnimeSheets = props => {
    return <main className="anime-sheets-page">
                <Front pagKey="sheets" title="" animePath={props.animePath} searchType="Sheets"/>
                <GridView section="anime-sheets" view="sheets" filter="animePath" filterValue={props.animePath}/>
            </main>
};

export default AnimeSheets;