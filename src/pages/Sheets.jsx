import React from "react";
import Front from "../components/sections/Front";
import GridView from "../components/sections/GridView";

const Sheets = props => {
    return <div className="sheets-page">
            <main className="main-container">
                <Front pagKey = "sheets" title="Sheets"/>
                <GridView section="sheets" view="sheets" filter=""/>
            </main>
        </div>
};

export default Sheets;