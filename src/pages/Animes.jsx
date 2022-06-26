import React, { useEffect } from 'react';
import GridView from "components/GridView";

const Animes = props => {

    useEffect(() => {
        document.title = "Animes";
    }, [])

    return <main className="animes-page">
                <GridView section="animes" title="Animes" searchType="Animes" view="animes" filter=""/>
            </main>
};

export default Animes;