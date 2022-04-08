import React from "react";
import Front from "components/Front";
import GridView from "components/GridView";

const VisualNovels = props => {
    return <main className="visual-novels-page">
                <Front pagKey = "vn" title="Visual Novels" searchType="Visual Novels"/>
                <GridView section="vn" view="visual-novels" filter=""/>
            </main>
};

export default VisualNovels;