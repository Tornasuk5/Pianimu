import React from "react";
import Front from "../components/sections/Front";
import GridView from "../components/sections/GridView";

const Sheets = props => {
    return <main className="sheets-page">
                <Front pagKey = "sheets" title="Sheets"/>
                <GridView section="sheets" view="sheets" filter=""/>
            </main>
};

export default Sheets;