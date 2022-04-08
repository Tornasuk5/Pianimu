import React from "react";
import Front from "components/Front";
import GridView from "components/GridView";

const Sheets = props => {
    return <main className="sheets-page">
                <Front pagKey = "sheets" title="Sheets" searchType="Sheets"/>
                <GridView section="sheets" view="sheets" filter=""/>
            </main>
};

export default Sheets;