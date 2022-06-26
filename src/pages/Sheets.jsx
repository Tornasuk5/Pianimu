import React, { useEffect } from "react";
import GridView from "components/GridView";

const Sheets = props => {

    useEffect(() => {
        document.title = "Sheets";
    }, [])

    return <main className="sheets-page">
                <GridView section="sheets" title="Sheets" searchType="Sheets" view="sheets" filter=""/>
            </main>
};

export default Sheets;