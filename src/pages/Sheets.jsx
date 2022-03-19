import React from "react";
import SheetsList from "../components/sections/SheetsList";
import Front from "../components/sections/Front"

const Sheets = props => {
    return <div className="sheets-page">
            <main className="main-container">
                <Front pagKey = "sheets" page="Sheets"/>
                <SheetsList filter=""/>
            </main>
        </div>
};

export default Sheets;