import React, { useEffect } from "react";
import GridView from "components/GridView";

const VisualNovels = props => {

    useEffect(() => {
        document.title = "Visual Novels";
    }, [])

    return <main className="visual-novels-page">
                <GridView section="vn" title="Visual Novels" searchType="Visual Novels" view="visual-novels" filter=""/>
            </main>
};

export default VisualNovels;