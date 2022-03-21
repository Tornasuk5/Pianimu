import React from "react";
import Front from "../components/sections/Front";
import GridView from "../components/sections/GridView";
import Header from '../components/sections/Header';

const VisualNovels = props => {
    return <div className="visual-novels-page">
            <main className="main-container">
                <Front pagKey = "vn" page="Visual Novels"/>
                <GridView section="vn" view="visual-novels" filter=""/>
            </main>
        </div>
};

export default VisualNovels;