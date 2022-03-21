import React from "react";
import Front from "../components/sections/Front";
import GridView from "../components/sections/GridView";
import Header from '../components/sections/Header';

const Sheets = props => {
    return <div className="sheets-page">
            <main className="main-container">
                <Front pagKey = "sheets" page="Sheets"/>
                <GridView section="sheets" view="sheets" filter=""/>
            </main>
        </div>
};

export default Sheets;